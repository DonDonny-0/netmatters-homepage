<?php

$router->get('/', 'controllers/index.php');

$router->get('/contact-us', 'controllers/contact/contact-us.php');
$router->post('/contact-us', 'controllers/contact/contact-us.php');