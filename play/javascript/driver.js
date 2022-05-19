// Settings:
const num_of_guesses = 6;
const word_len = 5;
// Initialization Function.
function init() {
    // Instantiating a new board object.
    const board = new Board(word_len, num_of_guesses);
    // Initializing the board.
    board.init();
    console.log(board.board_arr);
    // Keyboard listener.
    document.addEventListener('keypress', (event) => {
        // Detecting if the inputted key is a valid input.
        let ascii = event.key.charCodeAt(0);
        if (event.key)
    })
}
window.onload = init;
