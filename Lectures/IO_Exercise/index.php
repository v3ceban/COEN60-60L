<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Php logger</title>
</head>
<body>
  <?php
  date_default_timezone_set("America/Los_Angeles");
  $date = date("m/d/y h:i:s a\n");
  $file = "log.txt";
  $text = file_get_contents($file);
  ?>
  <h1>This page is logged</h1> 
  <p>Every visit will be saved to the log file</p>
  <p>Current visit: <?= $date ?></p>
  <?php
  file_put_contents($file, $date, FILE_APPEND);
  ?>
  <h2>Log content:</h2>
  <p><?= nl2br($text) . "<b>" . $date . " <=== current visit</b>" ?></p>
</body>
</html>
