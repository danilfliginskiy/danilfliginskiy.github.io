<!DOCTYPE html>
<html>
<head>
	<title>Войти</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="icon" href="img/favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <div class="login">
		<div class="container">

			
			<form action="login.php" method="post" class="login__form">
				
				<h2 class="title">Войти</h2>

				<div class="login__form-wrap">

					<?php if (isset($_GET['error'])) { ?>
						<p class="error"><?php echo $_GET['error']; ?></p>
					<?php } ?>

					<div class="login__form-input-wrap">
						<label class="login__form-label">Имя пользователя</label>
						<input class="login__form-input" type="text" name="uname" placeholder="Имя пользователя">
					</div>

					<div class="login__form-input-wrap">
						<label class="login__form-label">Пароль</label>
						<input class="login__form-input" type="password" name="password" placeholder="Пароль">
					</div>

					<button type="submit" class="button button_login">Войти</button>
					<a href="signup.php" class="login__form-sign">Создать аккаунт</a>

				</div>

     	</form>

		</div>
	</div>
</body>
</html>