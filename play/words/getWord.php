<?php
  function getWord() {
    // Checking to see if word already generated today.
    $dir = new DirectoryIterator("./history/");
    $to_find = date("Y-m-d").".txt";
    foreach ($dir as $file) {
      // Ignoring the '.' files.
      if (!$file->isDot()) {
        // If there is already a file on record for today.
        if ($to_find == $file->getBasename()) {
          // Get the word and return it.
          return file_get_contents("./history/".$to_find);
        }
      }
    }
    // If not, try to open the words.txt file.
    $file = fopen("./.words.txt", "r") or die("Unable to open file!");
    $data = fread($file, filesize("./.words.txt")); // Read the data.
    fclose($file); // Close the file.
    // Convert the string into an array.
    $words = explode("\n", $data);
    // Pick a random element from the array.
    $length = count($words);
    $index = rand(0, $length-1);
    $word = $words[$index];
    $word = str_replace("\r", "", $word);
    // Writing this new word to a file.
    $new_file = fopen("./history/".date("Y-m-d").".txt", "w");
    fwrite($new_file, $word);
    fclose($new_file);
    // Returning the word.
    return $word;
  }
  echo getWord();
?>