<?php
$recepient = 'olegwoker@ukr.net';
$sitename = 'Werclive';

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST['textarea']);
$message = "Имя: $name \nEmail: $email \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient")