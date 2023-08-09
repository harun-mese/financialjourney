<?php
 include('config.php');
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    
    <title>FJ: <?php echo ucfirst($_GET['category']); ?></title>

    <link rel="stylesheet" href="<?php $site_url ?>/css/category.css">
    <link rel="stylesheet" href="<?php $site_url ?>/css/bookmark.css">
<meta name="theme-color" content="#fff">
<!-- iOS Safari için -->
<meta name="apple-mobile-web-app-status-bar-style" content="#ffffff">
<!-- Windows Phone için -->
<meta name="msapplication-navbutton-color" content="#fff">

    <script src="<?php $site_url ?>/js/app.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="<?php $site_url ?>/js/category_ajax.js" defer></script>
    <link rel="shortcut icon" href="<?php $site_url ?>/assets/way.png" type="image/x-icon">

</head>
<body>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QX7FRX1YYG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QX7FRX1YYG');
</script>

<div class="barContainer">
    <div class="bar"></div>
</div>

<?php 

    
    if(isset($_GET['category'])  ){
        include('./view/header.php');
        include('./view/bookmark.php');
        include("./pages/c.php");

   }
   if(isset($_GET['url'])  ){
   
    include('./view/post_header.php');
    include('./view/bookmark.php');
    include("./pages/p.php");

   }
   
   include('./view/footer.php');
?>


   
</body>
</html>