function checkHorizontal(board) {
    // loop through the board and find four
    for (let row = board.length - 1; row >= 0; row--) {
        let redCheck = board[row].join('').match(/R{4}/g);
        let yellowCheck = board[row].join('').match(/Y{4}/g);

        if (redCheck || yellowCheck) {
            return {
                player: redCheck? 1 : 2,
                on: `Row scored a win on ${row}`
            }
        }
    }
}

function checkVertical(board) {
    
}

function checkBoard(board) {
    return checkVertical(board) || checkHorizontal(board);
}

export {checkBoard};