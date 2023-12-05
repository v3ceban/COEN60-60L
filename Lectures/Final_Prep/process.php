<?php

extract($_POST);
$file = "visit_data.txt";

$content = file_get_contents($file);
$date = date('m/d/Y h:i:s:a', time());
$newRecord = "$fname | $lname | $date\n";
$content .= $newRecord;

file_put_contents($file, $newRecord, FILE_APPEND);
