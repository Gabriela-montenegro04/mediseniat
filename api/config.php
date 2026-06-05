<?php
/**
 * MediSENIAT — Configuración de Base de Datos
 * Conexión PDO a MySQL (XAMPP)
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Responder a preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Configuración de la base de datos
define('DB_HOST', 'sql111.infinityfree.com');
define('DB_NAME', 'if0_42107842_mediseniat');
define('DB_USER', 'if0_42107842');
define('DB_PASS', 'mediseniat');
define('DB_CHARSET', 'utf8mb4');

/**
 * Obtener conexión PDO
 */
function getDB() {
    static $pdo = null;
    if ($pdo === null) {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
            $pdo = new PDO($dsn, DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Error de conexión a la base de datos: ' . $e->getMessage()
            ]);
            exit();
        }
    }
    return $pdo;
}

/**
 * Respuesta JSON estándar
 */
function responder($data, $code = 200) {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit();
}

/**
 * Obtener datos del body (JSON)
 */
function getBody() {
    return json_decode(file_get_contents('php://input'), true) ?? [];
}
