<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$currentHost = $_GET['currentHost'];
$hosts = file_get_contents('../hosts.txt');

if (!empty($currentHost) && preg_match('/[^#]\s{0,1}127\.0\.0\.1\s' . $currentHost . '/', $hosts)) {
    echo 'OK';
} else {
    echo 'NOK';
}
