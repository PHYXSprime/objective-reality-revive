<?php
require_once 'config.php';

try {
    $language = $_GET['lang'] ?? 'en';
    
    // Map language codes to table names
    $tableName = '';
    switch ($language) {
        case 'de':
            $tableName = 'fallacies_DE';
            break;
        case 'es':
            $tableName = 'fallacies_ES';
            break;
        case 'fr':
            $tableName = 'fallacies_FR';
            break;
        default:
            $tableName = 'fallacies_EN'; // English is the base table
    }
    
    // Check if the table exists
    $checkTable = $pdo->prepare("SHOW TABLES LIKE ?");
    $checkTable->execute([$tableName]);
    
    if ($checkTable->rowCount() === 0) {
        // Fallback to English if translation table doesn't exist
        $tableName = 'fallacies_EN';
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