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
}
window.onload = init;
