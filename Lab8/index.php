<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lab8</title>
</head>
<body>
    <h1>Photo Album</h1> 
    <ul>
      <?php
      $photos = glob("./photo/*.png");
      foreach ($photos as $photo) {
          echo '<li class="photoitem">
              <a href="' . $photo . '" target="_blank">' . basename($photo, ".png") . '</a> (' . round(filesize($photo) / 1000) . ' KB)
          </li>';
      }
      ?>
    </ul>
</body>
</html>
