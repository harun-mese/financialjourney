<main>

<?php
// Veritabanı bağlantısı
include_once '../config.php';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // AJAX'tan gelen verileri al
    //$url = $_GET["url"];
    
    // Veritabanından veriyi al ve HTML formatında döndür
    $stmt = $conn->prepare("SELECT * FROM posts WHERE is_draft = 1");
    //$stmt->bindParam(":posturl", $url);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($result as $row) {
        echo '
        <div class="post">
        <img src="'.$row["post_img_url"].'" width="100%">
        <div class="col">
            <h2>'.$row["post_title"].'</h2>
            <h5>'.$row["post_date"].'</h5>
            <div class="row">
             <label for="isDraft1" style="margin-right: 5px;color:orange">Draft</label><input style="display: none;"  type="checkbox" name="isDraft1" id="isDraft1" value="dsdsg"><button>Edit</button>
            </div>
           
        </div>
    </div> ';
      }
    
} catch (PDOException $e) {
    echo "Hata: " . $e->getMessage();
}

$conn = null;
?>
    </main>  