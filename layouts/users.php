<?php
    // check user login or not
    require __DIR__ . '/../views/components/checkUserLogin.php';

    require 'Test/Database.php';
    $config = require 'Test/config.php';
    $db = new database($config['database']);

    $posts = $db->query("SELECT * FROM app1 ")->fetchAll();

    

require "Test/views/users.view.php";
