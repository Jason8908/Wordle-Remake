class Board {
    constructor(width, height, word, box_size = 65) {
        // Setting width and height of the board.
        this.width = width; // Corresponds to the number of characters in the word.
        this.height = height; // Corresponds to the number of guesses the user gets.
        this.box_size = box_size; // The size of each letter box.
        this.word = word; // The correct word.
        // Colours.
        this.green = "#6AAA64";
        this.grey = "#787C7E";
        this.yellow = "#C9B458";
    }
    init() {
        // Variables to keep track of the state of the board.
        this.curr_y = 0;
        this.curr_x = 0;
        this.active = true;
        this.board_class = "board";
        // Creating the board, which is a table.
        const board = document.createElement('table');
        // Creating an array to store table values.
        this.board_arr = new Array();
        // Giving it a class so we can identify it later.
        board.classList.add(this.board_class);
        // Adding the cells to the board.
        for (let i = 0; i < this.height; i++) {
            // Creating a row for the board.
            const row = document.createElement('tr');
            row.classList.add('row');
            // Array representation.
            let row_arr = new Array();
            for (let j = 0; j < this.width; j++) {
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
    endGame(guessed) {
        this.active = false;
        // Reveal the correect word
        let answer = document.getElementsByClassName("reveal")[0];
        answer.innerHTML = this.word;
        answer.classList.add("show");
        answer.classList.remove("hide");
        // If the player was able to guess the correct word.
        if (guessed) {
            return true;
        }
        else {
            return false;
        }
    }
    // Input-related functions.
    submit() {
        // If the row is not full.
        if (this.curr_x < this.width) return;
        // Otherwise, check for correctness, and move on to next row.
        if (this.checkRow()) return this.endGame(true);
        // Move onto the next row and check for last guess used.
        if (++this.curr_y == this.height) return this.endGame(false);
        this.curr_x = 0;
    }
    backspace() {
        // If the current row is empty.
        if (this.curr_x < 1) return;
        // Otherwise, delete the current letter from the board array.
        this.curr_x--;
        this.board_arr[this.curr_y][this.curr_x] = '';
        // Update the board.
        this.update(this.curr_x, this.curr_y);
    }
    letterIn(letter) {
        // If the current row is full.
        if (this.curr_x >= this.width) return;
        // Otherwise, add a new letter!
        letter = letter.toUpperCase();
        this.board_arr[this.curr_y][this.curr_x] = letter;
        // Updating the board.
        this.update(this.curr_x, this.curr_y);
        // Traversing forward.
        this.curr_x++;
    }
    getColours() {
        // An array to store the colour codes.
        let colours = new Array(this.width);
        // Turning the correct word into an array.
        let solution = this.word.split('');
        // Green pass.
        for (let i = 0; i < this.width; i++) {
            // Correct letter, correct position.
            if (this.board_arr[this.curr_y][i] == solution[i]) {
                colours[i] = this.green;
                solution[i] = '';
            }
        }
        // Check all letter combinations.
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.word.length; j++) {
                // Checking the letters.
                if (this.board_arr[this.curr_y][i] == solution[j]) {
                    // Correct letter, incorrect position.
                    if (!colours[i]) colours[i] = this.yellow;
                    solution[j] = '';
                    break;
                }
            }
            if (!colours[i]) colours[i] = this.grey;
        }
        // Returning the colours array.
        return colours;
    }
    drawRow(colours) {
        // Looping through the row and assigning background colours.
        for (let i = 0; i < this.width; i++) {
            // Getting the current cell.
            let cell = document.getElementById(`${this.curr_y}${i}`);
            // Setting the colour.
            cell.style.backgroundColor = colours[i];
            cell.style.color = "white";
            cell.style.border = "none";
            // Getting the keyboard element.'
            let letter = this.board_arr[this.curr_y][i];
            let key = document.getElementById(`${letter}`);
            // If the key is not marked already.
            if (!key.classList.contains("marked") || colours[i] == this.green) {
                key.className = "";
                key.classList.add("key");
                key.classList.add("marked");
                if (colours[i] == this.green) key.classList.add("greenP");
                else if (colours[i] == this.yellow) key.classList.add("yellowP");
                else key.classList.add("greyP");
            }
        }
    }
    checkRow() {
        // Joining the input array into a string.
        let guess = this.board_arr[this.curr_y].join("");
        // Generating an array of colours to assign to the row.
        this.drawRow(this.getColours()); // Applying the colour change.
        // If the guess is right.
        if (guess == this.word) return true;
        return false;
    }
    // Board updates.
    update(x, y) {
        // Update the board based on the array element.
        let cell = document.getElementById(`${y}${x}`);
        // If we want to add a letter to the cell.
        if (this.board_arr[y][x]) {
            // Creating a new letter element.
            let letter = document.createElement('p');
            letter.innerHTML = this.board_arr[y][x];
            letter.classList.add('letter');
            // Appending the new letter element.
            cell.appendChild(letter);
            cell.style.color = 'black';
        }
        // If we want to empty the cell.
        else {
            cell.innerHTML = this.board_arr[y][x];
            cell.style.color = 'grey';
        }
    }
}