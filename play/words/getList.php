<?php
  function getList() {
    // If not, try to open the words.txt file.
    $file = fopen("./.words.txt", "r") or die("Unable to open file!");
    $data = fread($file, filesize("./.words.txt")); // Read the data.
    fclose($file); // Close the file.
    // Convert the string into an array.
    $words = explode("\n", $data);
    foreach ($words as $word) {
        echo trim($word).',';
    }
  }
  getList();
?>