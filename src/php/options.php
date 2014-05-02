<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header('Content-type: application/json');

if (isset($_POST['host_file'])) {

    try { 
        $target = trim($_POST['host_file']);
        $link = '../hosts.txt';

        if (file_exists(dirname(__FILE__) . '/' . $link)) {
            unlink(dirname(__FILE__) . '/' . $link);
        }

        if (symlink($target, $link)) {
            echo 'OK';
        } else {
            echo 'NOK';
        }
    } catch(Exception $e) {
            echo $e->getMessage();
    }
}
