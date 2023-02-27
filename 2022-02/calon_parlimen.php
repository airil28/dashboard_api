<?php
header("Access-Control-Allow-Origin: *");

$json = file_get_contents('calon_parlimen.json');
echo $json;
?>