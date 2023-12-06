<!DOCTYPE html>
<html>
<head>
	<title>Регистрация</title>
     <link rel="icon" href="img/favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
     <div class="signup">
          <form action="signup-check.php" method="post" class="login__form signup__form">
               <h2 class="text login__form-title">Регистрация</h2>
               <?php if (isset($_GET['error'])) { ?>
                    <p class="error"><?php echo $_GET['error']; ?></p>
               <?php } ?>

               <?php if (isset($_GET['success'])) { ?>
                    <p class="success"><?php echo $_GET['success']; ?></p>
               <?php } ?>

               <label>Имя</label>
               <?php if (isset($_GET['name'])) { ?>
                    <input type="text" 
                         name="name" 
                         placeholder="Name"
                         value="<?php echo $_GET['name']; ?>"><br>
               <?php }else{ ?>
                    <input type="text" 
                         name="name" 
                         placeholder="Name"><br>
               <?php }?>

               <label>Логин</label>
               <?php if (isset($_GET['uname'])) { ?>
                    <input type="text" 
                         name="uname" 
                         placeholder="User Name"
                         value="<?php echo $_GET['uname']; ?>"><br>
               <?php }else{ ?>
                    <input type="text" 
                         name="uname" 
                         placeholder="User Name"><br>
               <?php }?>


               <label>Пароль</label>
               <input type="password" 
                    name="password" 
                    placeholder="Password"><br>

               <label>Повтор пароля</label>
               <input type="password" 
                    name="re_password" 
                    placeholder="Re_Password"><br>

               <button type="submit" class="button button_login">Регистрация</button>
               <a href="login_page.php" class="ca">Уже есть аккаунт?</a>
          </form>
     </div>
</body>
</html>