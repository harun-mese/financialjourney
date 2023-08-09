
<?php 
    include('config.php');
    include('./view/head.php');
?>

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
   

   include('./view/header.php');
   include('./view/bookmark.php');

   if(isset($_GET['sayfa'])){

        if( file_exists("./pages/". $_GET["sayfa"] .".php")){
            include("./pages/". $_GET["sayfa"] .".php");
        }else{
            include("./pages/h.php");
        }

   }else{
    include("./pages/h.php");
   }

   include('./view/footer.php');
?>




</body>
</html>