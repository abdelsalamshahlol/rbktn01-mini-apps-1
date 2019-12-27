let fields = document.getElementsByClassName('field');
let move = 'X';
let board = {
  0: new Array(3),
  1: new Array(3),
  2: new Array(3)
};

for (let field of fields) {
  field.onclick = (e) => {
    field.children[0].innerHTML = move;
    move = move === 'X' ? 'O' : 'X';
    let position = field.dataset;
    console.log(board, position)
  }
}
console.log(fields)

