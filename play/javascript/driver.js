// Settings:
let solution = "";
let word_len = 0;
let num_of_guesses = 0;

// Keypress functions.
function validKey(event) {
    // Detecting if the inputted key is a valid input.
    let my_key = event.key.toUpperCase();
    let ascii = my_key.charCodeAt(0);
    // If the key pressed is not valid, exit the function.
    if (my_key != 'ENTER' && my_key != 'BACKSPACE' && my_key.length > 1) return false;
    if (ascii < 65 || ascii > 90) return false;
    return true;
}
// Initialization Function.
function init(solution) {
    const word_len = solution.length;
    const num_of_guesses = word_len+1;
    // Instantiating a new board object.
    console.log(word_len, num_of_guesses, solution);
    const board = new Board(word_len, num_of_guesses, solution);
    // Initializing the board.
    board.init();
    // Keyboard listener.
    document.addEventListener('keydown', (event) => {
        if (!board.active || !validKey(event)) return false;
        // Deciding what to do based on keypress.
        if (event.key == 'Enter') board.submit(); // Enter.
        else if (event.key == 'Backspace') board.backspace(); // Backspace.
        else board.letterIn(event.key); // General letter.
    });
}

$(document).ready(async () => {
  //Async function to check for user information.
  $.ajax({
    url: './words/getWord.php',
    type: 'GET',
    success: async function(res) {
      // Initializing the game.
      init(res);
    }
  });
});
