<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">

	<title><?php echo get_bloginfo( 'name' ); ?></title>

	<link href="<?php echo get_bloginfo( 'template_directory' );?>/src/scss/helpers/reset.css" rel="stylesheet">
	<link href="<?php echo get_bloginfo( 'template_directory' );?>/src/scss/helpers/normalize.css" rel="stylesheet">
	<link href="<?php echo get_bloginfo( 'template_directory' );?>/src/slick/slick.css" rel="stylesheet">
	<link href="<?php echo get_bloginfo( 'template_directory' );?>/style.css" rel="stylesheet">

  <?php wp_head();?>
</head>

<body>

	<div class="sticky-header">
		<div class="sticky-header__container">
			<a href="#" class="sticky-header__container__logo">CAR COMPANY</a>
		</div>
	</div>
	<header class="slider">
		<div><img src="<?php echo get_bloginfo( 'template_directory' );?>/src/images/model1.png" alt="logo"></div>
		<div><img src="<?php echo get_bloginfo( 'template_directory' );?>/src/images/model2.png" alt="logo"></div>
		<div><img src="<?php echo get_bloginfo( 'template_directory' );?>/src/images/model3.png" alt="logo"></div>
	</header>