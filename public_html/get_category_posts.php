<?php
// Veritabanı bağlantısı
include_once './config.php';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // AJAX'tan gelen verileri al
    $category = $_GET["category"];
    $start = $_GET["start"];
    $limit = $_GET["limit"];

    // Veritabanından veriyi al ve HTML formatında döndür
    $stmt = $conn->prepare("SELECT post_title, post_description, post_img_url, post_url FROM posts WHERE category_name = :category LIMIT :startCount, :limitCount");
    $stmt->bindParam(":category", $category);
    $stmt->bindParam(":startCount", $start, PDO::PARAM_INT);
    $stmt->bindParam(":limitCount", $limit, PDO::PARAM_INT);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $response = '';

    foreach ($result as $row) {
        $response .= '<a href="/p/'.$row["post_url"].'" class="post"><img src="'.$row["post_img_url"].'"><div class="post-content"><div class="post-title">'.$row["post_title"].'</div><div class="post-description"> '.$row["post_description"].' </div></div></a>';
    }
   

    echo $response;
} catch (PDOException $e) {
    echo "Hata: " . $e->getMessage();
}

$conn = null;
?>
