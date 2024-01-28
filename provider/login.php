<?php
    require 'Test/Database.php';
    $config = require 'Test/config.php';
    $db = new Database($config['database']);

    if (isset($_POST["submit"])) {
        $name = $_POST["name"];
        $pass = $_POST["password"];

        $query = "SELECT user_id, user_name, user_password FROM user_tbl WHERE user_name = :name";

        $stmt = $db->connection->prepare($query);
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);

        if ($stmt->execute()) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($row && $pass == $row['user_password']) {
                session_start();
                $_SESSION["userid"] = $row["user_id"];

                if (!empty($_POST["remember"])) {
                    setcookie("user_login", $_POST["name"], time() + (10 * 365 * 24 * 60 * 60));
                    setcookie("userpassword", $_POST["password"], time() + (10 * 365 * 24 * 60 * 60));
                } else {
                    if (isset($_COOKIE["user_login"])) {
                        setcookie("user_login", "");
                    }
                    if (isset($_COOKIE["userpassword"])) {
                        setcookie("userpassword", "");
                    }
                }
                header("Location: /learnphp/");
            } else {
                echo "<script>alert('Invalid login credentials');</script>";
            }
        } else {
            echo "Error: " . $stmt->errorInfo()[2];
        }
    }

require "Test/views/login.view.php";
?>
