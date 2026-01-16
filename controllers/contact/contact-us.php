<?php

use Core\App;
use Core\Database;
use Core\Validator;

$db = App::resolve(Database::class);
$offices = $db->query('select * from offices')->get();
$errors = [];
$success = "Your message has been sent!";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (! Validator::string($_POST['name'], 1, 1000)) {
    $errors['name'] = 'error';
  }

  if (! Validator::string($_POST['email'], 1, 1000)) {
    $errors['email'] = 'error';
  }

  if (! Validator::string($_POST['phone'], 1, 1000)) {
    $errors['phone'] = 'error';
  }

  if (! Validator::string($_POST['message'], 1, 1000)) {
    $errors['message'] = 'error';
  }

  if (empty($errors)) {
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

    $errors['success'] = 'success'; 
  }
}

return view("contact-us.view.php", [
  'heading' => 'Create Note',
  'offices' => $offices,
  'errors' => $errors,
  'success' => $success
]);