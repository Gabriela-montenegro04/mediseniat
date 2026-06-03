<?php
/**
 * MediSENIAT — API de Citas
 * Endpoints: GET, POST, PUT /api/citas.php
 * Consulta: PUT /api/citas.php?action=consulta&id=X
 */
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';
$id     = $_GET['id'] ?? null;

switch ($method) {
    case 'GET':
        if ($id) {
            getCita($id);
        } else {
            getCitas();
        }
        break;
    case 'POST':
        crearCita();
        break;
    case 'PUT':
        if ($action === 'consulta' && $id) {
            guardarConsulta($id);
        } elseif ($id) {
            actualizarCita($id);
        } else {
            responder(['success' => false, 'message' => 'ID requerido'], 400);
        }
        break;
    case 'DELETE':
        if ($id) {
            eliminarCita($id);
        } else {
            responder(['success' => false, 'message' => 'ID requerido'], 400);
        }
        break;
    default:
        responder(['success' => false, 'message' => 'Método no permitido'], 405);
}

function getCitas() {
    $db = getDB();
    $stmt = $db->query("
        SELECT c.*, 
               p.nombres AS pac_nombres, p.apellidos AS pac_apellidos, p.cedula AS pac_cedula,
               m.nombres AS med_nombres, m.apellidos AS med_apellidos
        FROM citas c
        LEFT JOIN pacientes p ON c.paciente_id = p.id
        LEFT JOIN medicos m ON c.medico_id = m.id
        ORDER BY c.fecha DESC, c.hora ASC
    ");
    $citas = $stmt->fetchAll();

    // Cargar medicamentos para cada cita
    foreach ($citas as &$cita) {
        $stmtMeds = $db->prepare("SELECT * FROM medicamentos WHERE cita_id = ?");
        $stmtMeds->execute([$cita['id']]);
        $cita['medicamentos'] = $stmtMeds->fetchAll();
    }

    responder(['success' => true, 'data' => $citas]);
}

function getCita($id) {
    $db = getDB();
    $stmt = $db->prepare("
        SELECT c.*, 
               p.nombres AS pac_nombres, p.apellidos AS pac_apellidos, p.cedula AS pac_cedula,
               p.departamento AS pac_depto, p.observaciones AS pac_observaciones,
               m.nombres AS med_nombres, m.apellidos AS med_apellidos, m.especialidad AS med_especialidad
        FROM citas c
        LEFT JOIN pacientes p ON c.paciente_id = p.id
        LEFT JOIN medicos m ON c.medico_id = m.id
        WHERE c.id = ?
    ");
    $stmt->execute([$id]);
    $cita = $stmt->fetch();

    if (!$cita) responder(['success' => false, 'message' => 'Cita no encontrada'], 404);

    // Medicamentos
    $stmtMeds = $db->prepare("SELECT * FROM medicamentos WHERE cita_id = ?");
    $stmtMeds->execute([$id]);
    $cita['medicamentos'] = $stmtMeds->fetchAll();

    responder(['success' => true, 'data' => $cita]);
}

function crearCita() {
    $data = getBody();
    $pacienteId   = intval($data['paciente_id'] ?? 0);
    $medicoId     = intval($data['medico_id'] ?? 0);
    $especialidad = trim($data['especialidad'] ?? '');
    $fecha        = $data['fecha'] ?? '';
    $hora         = $data['hora'] ?? '';
    $estado       = $data['estado_cita'] ?? 'Pendiente';
    $motivo       = trim($data['motivo'] ?? '');

    if (!$pacienteId || !$medicoId || !$fecha || !$hora) {
        responder(['success' => false, 'message' => 'Complete todos los campos requeridos'], 400);
    }

    $db = getDB();
    $stmt = $db->prepare("INSERT INTO citas (paciente_id, medico_id, especialidad, fecha, hora, estado_cita, motivo) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$pacienteId, $medicoId, $especialidad, $fecha, $hora, $estado, $motivo]);

    responder(['success' => true, 'message' => 'Cita registrada', 'id' => $db->lastInsertId()], 201);
}

function actualizarCita($id) {
    $data = getBody();
    $db = getDB();

    $campos = [];
    $valores = [];

    $mapeo = [
        'paciente_id' => 'paciente_id',
        'medico_id'   => 'medico_id',
        'especialidad'=> 'especialidad',
        'fecha'       => 'fecha',
        'hora'        => 'hora',
        'estado_cita' => 'estado_cita',
        'motivo'      => 'motivo',
        'diagnostico' => 'diagnostico',
    ];

    foreach ($mapeo as $key => $col) {
        if (isset($data[$key])) {
            $campos[] = "$col = ?";
            $valores[] = $data[$key];
        }
    }

    if (empty($campos)) responder(['success' => false, 'message' => 'Nada que actualizar'], 400);

    $valores[] = $id;
    $stmt = $db->prepare("UPDATE citas SET " . implode(', ', $campos) . " WHERE id = ?");
    $stmt->execute($valores);

    responder(['success' => true, 'message' => 'Cita actualizada']);
}

function guardarConsulta($id) {
    $data = getBody();
    $db = getDB();

    // Actualizar diagnóstico y estado
    $stmt = $db->prepare("UPDATE citas SET diagnostico = ?, estado_cita = 'Completada' WHERE id = ?");
    $stmt->execute([trim($data['diagnostico'] ?? ''), $id]);

    // Eliminar medicamentos anteriores y agregar los nuevos
    $stmt = $db->prepare("DELETE FROM medicamentos WHERE cita_id = ?");
    $stmt->execute([$id]);

    if (!empty($data['medicamentos'])) {
        $stmt = $db->prepare("INSERT INTO medicamentos (cita_id, nombre, dosis, frecuencia, dias, instrucciones) VALUES (?, ?, ?, ?, ?, ?)");
        foreach ($data['medicamentos'] as $med) {
            if (empty(trim($med['nombre'] ?? ''))) continue;
            $stmt->execute([
                $id,
                trim($med['nombre']),
                trim($med['dosis'] ?? ''),
                trim($med['frecuencia'] ?? ''),
                intval($med['dias'] ?? 0) ?: null,
                trim($med['instrucciones'] ?? ''),
            ]);
        }
    }

    responder(['success' => true, 'message' => 'Consulta guardada']);
}

function eliminarCita($id) {
    $db = getDB();
    // Primero eliminar medicamentos asociados (ON DELETE CASCADE debería manejarlo)
    $stmt = $db->prepare("DELETE FROM citas WHERE id = ?");
    $stmt->execute([$id]);
    responder(['success' => true, 'message' => 'Cita eliminada']);
}
