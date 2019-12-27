let fields = document.getElementsByClassName('field');
let move = 'X';
let board = [
  Array.from({ length: 3 }, () => 0),
  Array.from({ length: 3 }, () => 0),
  Array.from({ length: 3 }, () => 0)
];

let playMove = (e) => {
  // Prevent click on the child element
  if (e.target.localName !== 'div') {
    return;
  }

  let position = e.target.dataset;
  if (!validateMove(position)) {
    move = move === 'X' ? 'O' : 'X';
    board[position.x][position.y] = move === 'X' ? 1 : 2
    e.target.children[0].innerHTML = move;
    // Check if game is
    checkBoardHorizontal()
  }
  // console.log(board, position)
}

let validateMove = (position) => {
  return board[position.x][position.y];
}

let checkBoardHorizontal = () => {
  console.log(board)
  for (let row of board) {
    console.log(row.reduce((acc, nemo) => acc + nemo, ''));
    if (row.reduce((acc, memo) => acc + memo) === 6) {
      console.log('Game over O wins')
      // return true;
    }
    if (row.reduce((acc, memo) => acc + memo) === 3) {
      console.log('Game over X wins')
      // return true;
    }
  }
}

for (let field of fields) {
  field.onclick = playMove;
}
