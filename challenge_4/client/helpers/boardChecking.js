function checkHorizontal(board) {
    console.log('checking horizontal');
    // loop through the board and find four
    for (let row = board.length - 1; row >= 0; row--) {
        let redCheck = board[row].join('').match(/R{4}/g);
        console.log({redCheck});
        if(redCheck){
            return {
                player : 1,
                on: `Row scored a win on ${row}`
            }
        }
    }
}

function checkBoard(board) {
    return checkHorizontal(board);
}

export {checkBoard};