<?php
header("Access-Control-Allow-Origin: *");

$json = file_get_contents('pilihanraya.json');
echo $json;
?>