<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lab 9</title>
</head>
<body>
  <?php
  $usernames = ["coen60", "coen60l"];
  $data = $_POST;

  foreach ($data as $key => $value) {
      ${$key} = $value;
  }

  if (in_array($account, $usernames)) {
      echo nl2br("This account already exists\nPlease create a unique account\n");
      $flag = 0;
  } elseif (strlen($password) < 8) {
      echo nl2br("Password must be at least 8 characters long\n");
      $flag = 0;
  } elseif (!preg_match("/[0-9]/", $password) || !preg_match("/[a-z]/", $password) || !preg_match("/[A-Z]/", $password)) {
      echo nl2br("Password must contain at least one digit, one lowercase letter, and one uppercase letter\n");
      $flag = 0;
  } else {
      $flag = 1;
  }

  if ($flag != 0) {
      echo nl2br("Account created\n");
  }
  ?>
</body>
</html>
