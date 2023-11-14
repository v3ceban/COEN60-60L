<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP example 1</title>
</head>
<body>
    <?php
    $postData = $_POST;
    $grades = $_POST['grades'];
    $data = array("Peter" => "36", "Sharon" => "45", "Jane" => "20");
    foreach ($data as $key => $value) {
        echo nl2br($key . " is " . $value . " years old\n");
    }
    foreach ($postData as $key => $value) {
        echo nl2br($key . "=>" . $value . "\n");
    }
    ?>  
</body>
</html>
