<!DOCTYPE html>
<html>
<head>
     <title>Регистрация</title>

     <meta name="viewport" content="width=device-width, initial-scale=1">

     <link rel="icon" href="img/favicon.ico">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;600;700;900&display=swap" rel="stylesheet">
     <link rel="stylesheet" href="css/main.css">

</head>
<body>
     <div class="signup">
          <div class="container">

               <form action="signup-check.php" method="post" class="login__form signup__form">

                    <h2 class="title">Регистрация</h2>

                         <?php if (isset($_GET['error'])) { ?>
                         <p class="error"><?php echo $_GET['error']; ?></p>
                         <?php } ?>

                         <?php if (isset($_GET['success'])) { ?>
                         <p class="success"><?php echo $_GET['success']; ?></p>
                         <?php } ?>

                    <div class="login__form-wrap">

                         <div class="login__form-input-wrap">

                              <label class="login__form-label">Имя</label>
                              <?php if (isset($_GET['name'])) { ?>
                                   <input class="login__form-input" type="text" name="name" placeholder="Имя" value="<?php echo $_GET['name']; ?>">
                              <?php }else{ ?>
                                   <input class="login__form-input" type="text" name="name" placeholder="Имя">
                              <?php }?>

                         </div>

                         <div class="login__form-input-wrap">

                              <label class="login__form-label">Логин</label>
                              <?php if (isset($_GET['uname'])) { ?>
                                   <input class="login__form-input" type="text" name="uname" placeholder="Логин" value="<?php echo $_GET['uname']; ?>">
                              <?php }else{ ?>
                                   <input class="login__form-input" type="text" name="uname" placeholder="Логин"><br>
                              <?php }?>

                         </div>

                         <div class="login__form-input-wrap">

                              <label class="login__form-label">Пароль</label>
                              <input class="login__form-input" type="password" name="password" placeholder="Пароль"><br>

                              <label class="login__form-label">Повтор пароля</label>
                              <input class="login__form-input" type="password" name="re_password" placeholder="Повторите пароль"><br>

                         </div>

                         <button type="submit" class="button button_login">Регистрация</button>
                         <a href="login_page.php" class="login__form-sign">Уже есть аккаунт?</a>

                    </div>

               </form>

          </div>
     </div>
</body>
</html>