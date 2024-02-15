<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Аккаунт</title>

     <meta name="viewport" content="width=device-width, initial-scale=1">

     <link rel="icon" href="img/favicon.ico">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;600;700;900&display=swap" rel="stylesheet">
     <link rel="stylesheet" href="css/main.css">
</head>
<body>
     <div class="home">
          <div class="container">

               <h1 class="title title_center">Привет, <?php echo $_SESSION['user_name']; ?></h1>
               <div class="home__link">
                    <a href="logout.php" class="home__link-link">Выход</a>
               </div>

          </div>
     </div>
</body>
</html>

<?php 
}else{
     header("Location: login_page.php");
     exit();
}
 ?>