<?php

$test = "Not received";
if (isset($_POST['json_name'])) {
    file_put_contents("json.text", $_POST['json_name']);
    print_r($_POST['json_name']);
} else {
    print_r($test);
}
