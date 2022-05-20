window.onload = init;
// Settings:
const num_of_guesses = 6;
const word_len = 5;
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
function init() {
    // Instantiating a new board object.
    const board = new Board(word_len, num_of_guesses, "PENIS");
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
