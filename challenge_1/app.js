let fields = document.getElementsByClassName('field');
let resetBtn = document.getElementById('resetGame');
let move = 'X';
let board = [
  Array.from({ length: 3 }, () => 0),
  Array.from({ length: 3 }, () => 0),
  Array.from({ length: 3 }, () => 0)
];
let gameCount = 1;

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
    e.target.children[0].textContent = move;
    // Check if game is over
    checkBoard();
  }
}

// Click handler for reset button
resetBtn.onclick = () => {
  showWinner('');
  for (let field of fields) {
    field.children[0].textContent = '';
  }
  board = board.map((row) => Array.from({ length: 3 }, () => 0));
}

// Attach click listener to the squares
for (let field of fields) {
  field.onclick = playMove;
}

let validateMove = (position) => {
  return board[position.x][position.y];
}

let checkBoardHorizontal = () => {
  for (let row of board) {
    checkTrio(row.join(''));
  }
}

let checkBoardVertical = () => {
  let columnTmp = '';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      columnTmp += board[j][i];
    }
    checkTrio(columnTmp);
    columnTmp = '';
  }
}

let checkDiagonal = () => {
  let tmpDia = '';
  for (let i = 0; i < board.length; i++) {
    tmpDia += board[i][i];
  }
  checkTrio(tmpDia);
}

let checkTrio = (trio) => {
  let count_O = trio.match(/\O/gi);
  let count_X = trio.match(/\X/gi);

  if (count_O !== null && count_O.length > 2) {
    showWinner('Game over player O wins');
    return;
  }

  if (count_X !== null && count_X.length > 2) {
    showWinner('Game over player X wins');
    return;
  }
}

let checkBoard = () => {
  checkBoardHorizontal();
  checkBoardVertical();
  checkDiagonal();
}

let showWinner = (text) => {
  let el = document.querySelector('#result');
  el.innerHTML = text;
}