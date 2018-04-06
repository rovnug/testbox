<?php
$message = exec("/var/www/html/scripts/power.py 2>&1");

if ($message && substr($message, 0, 1) !== "{") {
    $message = '{"' . $message . '"}';
    $message = str_replace(':', '" : "', $message);
}

file_put_contents("/var/www/html/scripts/mylog.text", $message . " : message\n");

print_r($message);
