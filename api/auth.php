<?php
/**
 * MediSENIAT — API de Autenticación
 * Endpoints: POST /api/auth.php?action=login|register
 */
require_once __DIR__ . '/config.php';

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'login':
        login();
        break;
    case 'register':
        register();
        break;
    default:
        responder(['success' => false, 'message' => 'Acción no válida'], 400);
}

function login() {
    $data = getBody();
    $email = trim($data['email'] ?? '');
    $pass  = trim($data['password'] ?? '');

    if (!$email || !$pass) {
        responder(['success' => false, 'message' => 'Correo y contraseña son requeridos'], 400);
    }

    $db = getDB();
    $stmt = $db->prepare("SELECT * FROM usuarios WHERE email = ? AND estado = 'activo'");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user || $user['password'] !== $pass) {
        responder(['success' => false, 'message' => 'Correo o contraseña incorrectos'], 401);
    }

    // No enviar la contraseña al frontend
    unset($user['password']);
    responder(['success' => true, 'user' => $user]);
}

function register() {
    $data = getBody();
    $username    = trim($data['username'] ?? '');
    $nombre      = trim($data['nombre'] ?? '');
    $email       = trim($data['email'] ?? '');
    $pass        = trim($data['password'] ?? '');
    $rol         = $data['rol'] ?? 'doctor';

    if (!$nombre || !$email || !$pass) {
        responder(['success' => false, 'message' => 'Complete todos los campos requeridos'], 400);
    }

    // Validar contraseña
    if (strlen($pass) < 8 || !preg_match('/[A-Z]/', $pass) || !preg_match('/[0-9]/', $pass) || !preg_match('/[^A-Za-z0-9]/', $pass)) {
        responder(['success' => false, 'message' => 'La contraseña no cumple los requisitos de seguridad'], 400);
    }

    $db = getDB();

    // Verificar duplicado
    $stmt = $db->prepare("SELECT id FROM usuarios WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        responder(['success' => false, 'message' => 'Ya existe una cuenta con ese correo'], 409);
    }

    if (!$username) {
        $username = explode('@', $email)[0];
    }

    $stmt = $db->prepare("INSERT INTO usuarios (username, nombre, email, password, rol) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$username, $nombre, $email, $pass, $rol]);
    $newId = $db->lastInsertId();

    // Si es doctor, también agregar al listado de médicos
    if ($rol === 'doctor') {
        $especialidad = $data['especialidad'] ?? 'Medicina General';
        $cargo        = $data['cargo'] ?? 'Doctor';
        $partes       = explode(' ', $nombre, 2);
        $nombres      = $partes[0] ?? $nombre;
        $apellidos    = $partes[1] ?? '';

        $stmt = $db->prepare("INSERT INTO medicos (nombres, apellidos, rol, especialidad, email) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$nombres, $apellidos, $cargo, $especialidad, $email]);
    }

    responder(['success' => true, 'message' => 'Cuenta creada correctamente', 'id' => $newId], 201);
}
