<?php
require_once 'config.php';

try {
    $language = $_GET['lang'] ?? 'en';
    
    // Map language codes to table names
    $tableName = '';
    switch ($language) {
        case 'de':
            $tableName = 'biases_DE';
            break;
        case 'es':
            $tableName = 'biases_ES';
            break;
        case 'fr':
            $tableName = 'biases_FR';
            break;
        default:
            $tableName = 'biases_EN'; // English is the base table
    }
    
    // Check if the table exists
    $checkTable = $pdo->prepare("SHOW TABLES LIKE ?");
    $checkTable->execute([$tableName]);
    
    if ($checkTable->rowCount() === 0) {
        // Fallback to English if translation table doesn't exist
        $tableName = 'biases_EN';
    }
    
    $stmt = $pdo->prepare("SELECT * FROM `$tableName` ORDER BY id");
    $stmt->execute();
    
    $biases = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Convert to the expected format
    $formattedBiases = array_map(function($bias) {
        return [
            'id' => (int)$bias['id'],
            'name' => $bias['name'],
            'definition' => $bias['definition'],
            'example' => $bias['example'],
            'category' => $bias['category']
        ];
    }, $biases);
    
    echo json_encode($formattedBiases);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}
?>