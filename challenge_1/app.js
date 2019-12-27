let fields = document.getElementsByClassName('field');
let resetBtn = document.getElementById('resetGame');
let move = 'X';
let gameCount = 1;
let turns = 1;
let gameIsOver = false;
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
  if (!validateMove(position) && !gameIsOver) {
    board[position.x][position.y] = move;
    e.target.children[0].textContent = move;
    move = move === 'X' ? 'O' : 'X';
    turns++;
    // Check if game is over
    checkBoard();
  }
}

// Click handler for reset button
resetBtn.onclick = () => {
  showMessage('');
  for (let field of fields) {
    field.children[0].textContent = '';
  }
  board = board.map((row) => Array.from({ length: 3 }, () => 0));
  document.querySelector('#game_count').innerHTML = ++gameCount;
  gameIsOver = false;
  turns = 1;
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
    if (checkTrio(row.join(''))) {
      return true;
    }
  }
}

let checkBoardVertical = () => {
  let columnTmp = '';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      columnTmp += board[j][i];
    }
    if (checkTrio(columnTmp)) {
      return true;
    }
    columnTmp = '';
  }
}

let checkMainMajorDiagonal = () => {
  let tmpDia = '';
  for (let i = 0; i < board.length; i++) {
    tmpDia += board[i][i];
  }
  return checkTrio(tmpDia);
}

let checkMainMinorDiagonal = () => {
  let tmpDia = '';
  let row = 0;
  for (let i = board.length - 1; i >= 0; i--) {
    tmpDia += board[row++][i];
  }
  return checkTrio(tmpDia);
}

let checkTrio = (trio) => {
  let count_O = trio.match(/\O/gi);
  let count_X = trio.match(/\X/gi);

  if (count_O !== null && count_O.length > 2) {
    showMessage('Game over player O wins');
    return true;
  }

  if (count_X !== null && count_X.length > 2) {
    showMessage('Game over player X wins');
    return true;
  }
}

let checkBoard = () => {
  if (checkBoardHorizontal()
    || checkBoardVertical()
    || checkMainMajorDiagonal()
    || checkMainMinorDiagonal()) {
    gameIsOver = true;
  }
  if (turns > 9) {
    gameIsOver = true;
    showMessage('Draw');
  }
}

let showMessage = (text) => {
  let el = document.querySelector('#result');
  el.innerHTML = text;
}