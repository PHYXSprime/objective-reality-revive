<?php
require_once 'config.php';

try {
    $method = $_SERVER['REQUEST_METHOD'];
    
    if ($method === 'GET') {
        // Get all page views or specific page view
        $path = $_GET['path'] ?? null;
        
        if ($path) {
            // Get specific page view count
            $stmt = $pdo->prepare("SELECT views FROM page_views WHERE path = ?");
            $stmt->execute([$path]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            
            echo json_encode([
                'path' => $path,
                'views' => $result ? (int)$result['views'] : 0
            ]);
        } else {
            // Get all page views
            $stmt = $pdo->prepare("SELECT path, views FROM page_views ORDER BY views DESC");
            $stmt->execute();
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            $pageViews = [];
            foreach ($results as $row) {
                $pageViews[$row['path']] = (int)$row['views'];
            }
            
            echo json_encode($pageViews);
        }
        
    } elseif ($method === 'POST') {
        // Increment page view
        $input = json_decode(file_get_contents('php://input'), true);
        $path = $input['path'] ?? null;
        
        if (!$path) {
            http_response_code(400);
            echo json_encode(['error' => 'Path is required']);
            exit;
        }
        
        // Create table if it doesn't exist
        $createTable = "CREATE TABLE IF NOT EXISTS page_views (
            id INT AUTO_INCREMENT PRIMARY KEY,
            path VARCHAR(255) UNIQUE NOT NULL,
            views INT DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )";
        $pdo->exec($createTable);
        
        // Insert or update page view count
        $stmt = $pdo->prepare("
            INSERT INTO page_views (path, views) 
            VALUES (?, 1) 
            ON DUPLICATE KEY UPDATE 
            views = views + 1, 
            updated_at = CURRENT_TIMESTAMP
        ");
        $stmt->execute([$path]);
        
        // Get updated count
        $stmt = $pdo->prepare("SELECT views FROM page_views WHERE path = ?");
        $stmt->execute([$path]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'path' => $path,
            'views' => (int)$result['views']
        ]);
        
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}
?>