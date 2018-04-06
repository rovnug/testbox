<?php
$var1 = isset($_GET['q1']) ? $_GET['q1'] : "";
$var2 = isset($_GET['q2']) ? $_GET['q2'] : "";
$var3 = isset($_GET['q3']) ? $_GET['q3'] : "";

file_put_contents("/var/www/html/htdocs/js/python/log.txt", $var1 . " " . $var2 . " " . $var3 . " : test");

$message = exec("/var/www/html/htdocs/js/python/test.py " . $var1 . " " . $var2 . " 2>&1");
$text = substr($message, 1);
$newline = "\\n";
$replace = "";
$text = str_replace($newline, $replace, $text);
$add = "";
$remove = "'";
$text = str_replace($remove, $add, $text);
if ($text && substr($text, 0, 1) !== "{") {
    $text = '{"' . $text . '"}';
    $text = str_replace(':', '" : "', $text);
}
file_put_contents("/var/www/html/htdocs/js/python/mylog.text", $text . " : test");


if ($var3 == "yes") {
    $check = exec("/var/www/html/htdocs/js/python/test.py report 2 2>&1");

    $text2 = substr($check, 1);
    $text2 = str_replace($newline, $replace, $text2);
    $text2 = str_replace($remove, $add, $text2);
    if ($text2 && substr($text2, 0, 1) !== "{") {
        $text2 = '{"' . $text . '"}';
        $text2 = str_replace(':', '" : "', $text2);
    }
    $test = json_decode($text2, true);
    $arr = "";
    $res = "";
    if ($test) {
	foreach ($test as $k=>$v){
    	    $arr .= $k . " : " . $v . "\n";
            if ($k == "Curr user") {
		$res = substr($v, 0, -3);
		$text2 = '{"Laddström": "' . $res . 'A"}';
		break;
	    }
	}
    }

    file_put_contents("/var/www/html/htdocs/js/python/mylog2.text", $text2 . " : test2\n " . $res . "\n\n" . $arr);
    $text = $text2;
}


print_r($text);
