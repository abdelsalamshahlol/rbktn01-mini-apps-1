let fields = document.getElementsByClassName('field');
let move = 'X';
let board = [
  new Array(3),
  new Array(3),
  new Array(3)
];

let playMove = (e) => {
  // Prevent click on the child element
  if (e.target.localName !== 'div') {
    return;
  }

  let position = e.target.dataset;
  if (!validateMove(position)) {
    move = move === 'X' ? 'O' : 'X';
    board[position.x][position.y] = move
    e.target.children[0].innerHTML = move;
  }
  console.log(board, position)
}

let validateMove = (position) => {
  return board[position.x][position.y];
}

for (let field of fields) {
  field.onclick = playMove;
}
