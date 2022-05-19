class Board {
    constructor(width, height, box_size = 65) {
        // Setting width and height of the board.
        this.width = width; // Corresponds to the number of characters in the word.
        this.height = height; // Corresponds to the number of guesses the user gets.
        this.box_size = box_size; // The size of each letter box.
    }
    init() {
        // Creating the board, which is a table.
        const board = document.createElement('table');
        // Creating an array to store table values.
        this.board_arr = new Array();
        // Giving it a class so we can identify it later.
        board.classList.add("board");
        // Adding the cells to the board.
        for (let i = 1; i <= this.height; i++) {
            // Creating a row for the board.
            const row = document.createElement('tr');
            row.classList.add('row');
            // Array representation.
            let row_arr = new Array();
            for (let j = 1; j <= this.width; j++) {
                // Adding the individual cells to the table element.
                const cell = document.createElement('td');
                cell.classList.add('cell');
                cell.setAttribute('id', `${i}${j}`);
                // Array representation.
                row_arr.push('');
                // Cell size.
                cell.style.width =`${this.box_size}px`;
                cell.style.height = `${this.box_size}px`;
                // Adding the cell to the board.
                row.appendChild(cell);
            }
            // Appending the row to the board.
            board.appendChild(row);
            this.board_arr.push(row_arr);
        }
        // Writing the board to the screen.
        const game = document.getElementById("game");
        game.appendChild(board);
    }
}