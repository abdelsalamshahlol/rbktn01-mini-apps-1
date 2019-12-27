let fields = document.getElementsByClassName('field');
let move = 'X';
let board = [
  Array.from({ length: 3 }, () => 0),
  Array.from({ length: 3 }, () => 0),
  Array.from({ length: 3 }, () => 0)
];

// Click handler for squares
let playMove = (e) => {
  // Prevent click on the child element
  if (e.target.localName !== 'div') {
    return;
  }

  let position = e.target.dataset;
  if (!validateMove(position)) {
    move = move === 'X' ? 'O' : 'X';
    board[position.x][position.y] = move;
    e.target.children[0].innerHTML = move;
    // Check if game is over
    checkBoard();
  }
}

// Attach click listener to the squares
for (let field of fields) {
  field.onclick = playMove;
}

let validateMove = (position) => {
  return board[position.x][position.y];
}

let checkBoardHorizontal = () => {
  // console.log(board)
  for (let row of board) {
    let count_O = row.join('').match(/\O/gi);
    let count_X = row.join('').match(/\X/gi);

    if (count_O !== null && count_O.length > 2) {
      alert('Game over O wins')
    }

    if (count_X !== null && count_X.length > 2) {
      alert('Game over X wins')
    }
  }
}

let checkBoardVertical = () => {
  let tmpArr = '';
  for (let i = 0; i < board.length; board++) {
    console.log(board[0][i]);
  }
}

let checkBoard = () => {
  checkBoardHorizontal();
}

