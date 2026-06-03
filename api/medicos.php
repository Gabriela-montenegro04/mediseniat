<?php
/**
 * MediSENIAT — API de Médicos
 * Endpoints: GET, POST, PUT /api/medicos.php
 * Toggle: PUT /api/medicos.php?action=toggle&id=X
 */
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';
$id     = $_GET['id'] ?? null;

switch ($method) {
    case 'GET':
        if ($id) {
            getMedico($id);
        } else {
            getMedicos();
        }
        break;
    case 'POST':
        crearMedico();
        break;
    case 'PUT':
        if ($action === 'toggle' && $id) {
            toggleEstado($id);
        } elseif ($id) {
            actualizarMedico($id);
        } else {
            responder(['success' => false, 'message' => 'ID requerido'], 400);
        }
        break;
    default:
        responder(['success' => false, 'message' => 'Método no permitido'], 405);
}

function getMedicos() {
    $db = getDB();
    $stmt = $db->query("SELECT * FROM medicos ORDER BY id ASC");
    responder(['success' => true, 'data' => $stmt->fetchAll()]);
}

function getMedico($id) {
    $db = getDB();
    $stmt = $db->prepare("SELECT * FROM medicos WHERE id = ?");
    $stmt->execute([$id]);
    $med = $stmt->fetch();
    if (!$med) responder(['success' => false, 'message' => 'Médico no encontrado'], 404);
    responder(['success' => true, 'data' => $med]);
}

function crearMedico() {
    $data = getBody();
    $nombres      = trim($data['nombres'] ?? '');
    $apellidos    = trim($data['apellidos'] ?? '');
    $rol          = $data['rol'] ?? 'Doctor';
    $especialidad = trim($data['especialidad'] ?? '');
    $email        = trim($data['email'] ?? '');
    $telefono     = trim($data['telefono'] ?? '');

    if (!$nombres || !$apellidos || !$especialidad || !$email) {
        responder(['success' => false, 'message' => 'Complete los campos requeridos'], 400);
    }

    $db = getDB();

    $stmt = $db->prepare("INSERT INTO medicos (nombres, apellidos, rol, especialidad, email, telefono) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->execute([$nombres, $apellidos, $rol, $especialidad, $email, $telefono ?: null]);

    responder(['success' => true, 'message' => 'Médico registrado', 'id' => $db->lastInsertId()], 201);
}

function actualizarMedico($id) {
    $data = getBody();
    $db = getDB();

    $campos = [];
    $valores = [];

    foreach (['nombres','apellidos','rol','especialidad','email','telefono'] as $campo) {
        if (isset($data[$campo])) {
            $campos[] = "$campo = ?";
            $valores[] = $data[$campo];
        }
    }

    if (empty($campos)) responder(['success' => false, 'message' => 'Nada que actualizar'], 400);

    $valores[] = $id;
    $stmt = $db->prepare("UPDATE medicos SET " . implode(', ', $campos) . " WHERE id = ?");
    $stmt->execute($valores);

    responder(['success' => true, 'message' => 'Médico actualizado']);
}

function toggleEstado($id) {
    $db = getDB();

    $stmt = $db->prepare("SELECT estado FROM medicos WHERE id = ?");
    $stmt->execute([$id]);
    $med = $stmt->fetch();

    if (!$med) responder(['success' => false, 'message' => 'Médico no encontrado'], 404);

    $nuevoEstado = $med['estado'] === 'activo' ? 'inactivo' : 'activo';

    $stmt = $db->prepare("UPDATE medicos SET estado = ? WHERE id = ?");
    $stmt->execute([$nuevoEstado, $id]);

    responder(['success' => true, 'message' => "Médico marcado como $nuevoEstado", 'estado' => $nuevoEstado]);
}
