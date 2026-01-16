<?php

use Core\App;
use Core\Database;
use Core\Validator;


$db = App::resolve(Database::class);

$name = $_POST['name'];
$company = $_POST['company_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$errors = [];

if (strlen($_POST['name']) === 0) {
  $errors['name'] = 'Body is required.';
}

if (!Validator::email($email) || !Validator::required($email)) {
  $errors['email'] = 'has-error';
}

if (!Validator::required($phone)) {
  $errors['phone'] = 'has-error';
}

if (!Validator::required($message)) {
  $errors['message'] = 'has-error';
}

if (!empty($errors)) {
  $db->query(
    "insert into contacts(name, company_name, email, phone, message)
     values(:name, :company_name, :email, :phone, :message);", [
      'name' => $_POST['name'],
      'company_name' => $_POST['company_name'],
      'email' => $_POST['email'],
      'phone' => $_POST['phone'],
      'message' => $_POST['message']
    ]
  );
}


header('location: /contact-us');
die();

