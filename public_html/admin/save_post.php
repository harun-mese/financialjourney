<?php

include '../config.php';

if($_SERVER["REQUEST_METHOD"] == "POST")
{

    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = $data["name"];
    $email = $data["email"];

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        // AJAX'tan gelen verileri al
        //$url = $_GET["url"];
        
        $stmt = $pdo->prepare("INSERT INTO posts (name, email) VALUES (?, ?)");
        $stmt->execute([$name, $email]);
    
        
    } catch (PDOException $e) {
        echo "Hata: " . $e->getMessage();
    }
    
    $conn = null;
}




?>