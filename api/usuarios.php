<?php
/**
 * MediSENIAT — API de Usuarios
 * Endpoints: GET, POST, PUT /api/usuarios.php
 * Toggle: PUT /api/usuarios.php?action=toggle&id=X
 */
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';
$id     = $_GET['id'] ?? null;

switch ($method) {
    case 'GET':
        if ($id) {
            getUsuario($id);
        } else {
            getUsuarios();
        }
        break;
    case 'POST':
        crearUsuario();
        break;
    case 'PUT':
        if ($action === 'toggle' && $id) {
            toggleEstado($id);
        } elseif ($id) {
            actualizarUsuario($id);
        } else {
            responder(['success' => false, 'message' => 'ID requerido'], 400);
        }
        break;
    default:
        responder(['success' => false, 'message' => 'Método no permitido'], 405);
}

function getUsuarios() {
    $db = getDB();
    // Solo devolver admin y doctor, nunca pacientes
    $stmt = $db->query("SELECT id, username, nombre, email, rol, estado, fecha_creacion FROM usuarios WHERE rol != 'paciente' ORDER BY id ASC");
    responder(['success' => true, 'data' => $stmt->fetchAll()]);
}

function getUsuario($id) {
    $db = getDB();
    $stmt = $db->prepare("SELECT id, username, nombre, email, rol, estado, fecha_creacion FROM usuarios WHERE id = ?");
    $stmt->execute([$id]);
    $user = $stmt->fetch();
    if (!$user) responder(['success' => false, 'message' => 'Usuario no encontrado'], 404);
    responder(['success' => true, 'data' => $user]);
}

function crearUsuario() {
    $data = getBody();
    $username = trim($data['username'] ?? '');
    $nombre   = trim($data['nombre'] ?? $username);
    $email    = trim($data['email'] ?? '');
    $pass     = trim($data['password'] ?? '');
    $rol      = $data['rol'] ?? 'doctor';

    if (!$username || !$email || !$pass) {
        responder(['success' => false, 'message' => 'Complete todos los campos'], 400);
    }

    // Validar contraseña
    if (strlen($pass) < 8 || !preg_match('/[A-Z]/', $pass) || !preg_match('/[0-9]/', $pass) || !preg_match('/[^A-Za-z0-9]/', $pass)) {
        responder(['success' => false, 'message' => 'La contraseña no cumple los requisitos'], 400);
    }

    $db = getDB();

    // Verificar duplicados
    $stmt = $db->prepare("SELECT id FROM usuarios WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) responder(['success' => false, 'message' => 'Ya existe un usuario con ese email'], 409);

    $stmt = $db->prepare("SELECT id FROM usuarios WHERE username = ?");
    $stmt->execute([$username]);
    if ($stmt->fetch()) responder(['success' => false, 'message' => 'Ese nombre de usuario ya existe'], 409);

    $stmt = $db->prepare("INSERT INTO usuarios (username, nombre, email, password, rol) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$username, $nombre, $email, $pass, $rol]);

    responder(['success' => true, 'message' => 'Usuario creado', 'id' => $db->lastInsertId()], 201);
}

function actualizarUsuario($id) {
    $data = getBody();
    $db = getDB();

    $campos = [];
    $valores = [];

    if (isset($data['nombre'])) { $campos[] = 'nombre = ?'; $valores[] = $data['nombre']; }
    if (isset($data['email'])) { $campos[] = 'email = ?'; $valores[] = $data['email']; }
    if (isset($data['rol'])) { $campos[] = 'rol = ?'; $valores[] = $data['rol']; }

    if (empty($campos)) responder(['success' => false, 'message' => 'Nada que actualizar'], 400);

    $valores[] = $id;
    $stmt = $db->prepare("UPDATE usuarios SET " . implode(', ', $campos) . " WHERE id = ?");
    $stmt->execute($valores);

    responder(['success' => true, 'message' => 'Usuario actualizado']);
}

function toggleEstado($id) {
    $db = getDB();

    // Obtener estado actual
    $stmt = $db->prepare("SELECT estado FROM usuarios WHERE id = ?");
    $stmt->execute([$id]);
    $user = $stmt->fetch();

    if (!$user) responder(['success' => false, 'message' => 'Usuario no encontrado'], 404);

    $nuevoEstado = $user['estado'] === 'activo' ? 'inactivo' : 'activo';

    $stmt = $db->prepare("UPDATE usuarios SET estado = ? WHERE id = ?");
    $stmt->execute([$nuevoEstado, $id]);

    responder(['success' => true, 'message' => "Usuario marcado como $nuevoEstado", 'estado' => $nuevoEstado]);
}
