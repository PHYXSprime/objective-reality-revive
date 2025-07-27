<?php
require_once 'config.php';

try {
    $language = $_GET['lang'] ?? 'en';
    
    // Map language codes to table suffixes
    $tableSuffix = '';
    switch ($language) {
        case 'de':
            $tableSuffix = '_de';
            break;
        case 'es':
            $tableSuffix = '_es';
            break;
        case 'fr':
            $tableSuffix = '_fr';
            break;
        default:
            $tableSuffix = ''; // English is the base table
    }
    
    $tableName = 'logical_fallacies' . $tableSuffix;
    
    // Check if the table exists
    $checkTable = $pdo->prepare("SHOW TABLES LIKE ?");
    $checkTable->execute([$tableName]);
    
    if ($checkTable->rowCount() === 0) {
        // Fallback to English if translation table doesn't exist
        $tableName = 'logical_fallacies';
    }
    
    $stmt = $pdo->prepare("SELECT * FROM `$tableName` ORDER BY id");
    $stmt->execute();
    
    $fallacies = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Convert to the expected format
    $formattedFallacies = array_map(function($fallacy) {
        return [
            'id' => (int)$fallacy['id'],
            'name' => $fallacy['name'],
            'definition' => $fallacy['definition'],
            'example' => $fallacy['example'],
            'category' => $fallacy['category']
        ];
    }, $fallacies);
    
    echo json_encode($formattedFallacies);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}
?>