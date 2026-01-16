<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);
$articles = $db->query('select * from articles')->get();

view("index.view.php", [
  'heading' => 'Home',
  'articles' => $articles
]);