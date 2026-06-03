<?php
/**
 * MediSENIAT — API de Pacientes
 * Endpoints: GET, POST, PUT /api/pacientes.php
 * Toggle: PUT /api/pacientes.php?action=toggle&id=X
 */
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';
$id     = $_GET['id'] ?? null;

switch ($method) {
    case 'GET':
        if ($id) {
            getPaciente($id);
        } else {
            getPacientes();
        }
        break;
    case 'POST':
        crearPaciente();
        break;
    case 'PUT':
        if ($action === 'toggle' && $id) {
            toggleEstado($id);
        } elseif ($id) {
            actualizarPaciente($id);
        } else {
            responder(['success' => false, 'message' => 'ID requerido'], 400);
        }
        break;
    default:
        responder(['success' => false, 'message' => 'Método no permitido'], 405);
}

function getPacientes() {
    $db = getDB();
    $stmt = $db->query("SELECT * FROM pacientes ORDER BY id ASC");
    responder(['success' => true, 'data' => $stmt->fetchAll()]);
}

function getPaciente($id) {
    $db = getDB();
    $stmt = $db->prepare("SELECT * FROM pacientes WHERE id = ?");
    $stmt->execute([$id]);
    $pac = $stmt->fetch();
    if (!$pac) responder(['success' => false, 'message' => 'Paciente no encontrado'], 404);
    responder(['success' => true, 'data' => $pac]);
}

function crearPaciente() {
    $data = getBody();
    $nombres    = trim($data['nombres'] ?? '');
    $apellidos  = trim($data['apellidos'] ?? '');
    $cedula     = trim($data['cedula'] ?? '');
    $email      = trim($data['email'] ?? '');
    $telefono   = trim($data['telefono'] ?? '');
    $depto      = trim($data['departamento'] ?? '');
    $nacimiento = $data['nacimiento'] ?? null;
    $obs        = trim($data['observaciones'] ?? '');

    if (!$nombres || !$apellidos || !$cedula || !$email) {
        responder(['success' => false, 'message' => 'Complete los campos requeridos'], 400);
    }

    // Validar cédula venezolana
    $ciNum = preg_replace('/[VEJGvejg\-]/', '', $cedula);
    if (!is_numeric($ciNum) || intval($ciNum) < 100000 || intval($ciNum) > 100000000) {
        responder(['success' => false, 'message' => 'La cédula debe estar entre 100.000 y 100.000.000'], 400);
    }

    $db = getDB();

    // Verificar duplicados
    $stmt = $db->prepare("SELECT id FROM pacientes WHERE cedula = ?");
    $stmt->execute([$cedula]);
    if ($stmt->fetch()) responder(['success' => false, 'message' => 'Ya existe un paciente con esa cédula'], 409);

    $stmt = $db->prepare("SELECT id FROM pacientes WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) responder(['success' => false, 'message' => 'Ya existe un paciente con ese email'], 409);

    if ($telefono) {
        $stmt = $db->prepare("SELECT id FROM pacientes WHERE telefono = ?");
        $stmt->execute([$telefono]);
        if ($stmt->fetch()) responder(['success' => false, 'message' => 'Ya existe un paciente con ese teléfono'], 409);
    }

    $stmt = $db->prepare("INSERT INTO pacientes (nombres, apellidos, cedula, email, telefono, departamento, nacimiento, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$nombres, $apellidos, $cedula, $email, $telefono ?: null, $depto ?: null, $nacimiento ?: null, $obs ?: null]);

    responder(['success' => true, 'message' => 'Paciente registrado', 'id' => $db->lastInsertId()], 201);
}

function actualizarPaciente($id) {
    $data = getBody();
    $db = getDB();

    $campos = [];
    $valores = [];

    foreach (['nombres','apellidos','cedula','email','telefono','departamento','nacimiento','observaciones'] as $campo) {
        if (isset($data[$campo])) {
            $dbCampo = $campo;
            $campos[] = "$dbCampo = ?";
            $valores[] = $data[$campo];
        }
    }

    if (empty($campos)) responder(['success' => false, 'message' => 'Nada que actualizar'], 400);

    $valores[] = $id;
    $stmt = $db->prepare("UPDATE pacientes SET " . implode(', ', $campos) . " WHERE id = ?");
    $stmt->execute($valores);

    responder(['success' => true, 'message' => 'Paciente actualizado']);
}

function toggleEstado($id) {
    $db = getDB();

    $stmt = $db->prepare("SELECT estado FROM pacientes WHERE id = ?");
    $stmt->execute([$id]);
    $pac = $stmt->fetch();

    if (!$pac) responder(['success' => false, 'message' => 'Paciente no encontrado'], 404);

    $nuevoEstado = $pac['estado'] === 'activo' ? 'inactivo' : 'activo';

    $stmt = $db->prepare("UPDATE pacientes SET estado = ? WHERE id = ?");
    $stmt->execute([$nuevoEstado, $id]);

    responder(['success' => true, 'message' => "Paciente marcado como $nuevoEstado", 'estado' => $nuevoEstado]);
}
