let fields = document.getElementsByClassName('field');
let move = 'X';

for (let field of fields) {
  field.onclick = (e) => {
    field.children[0].innerHTML = move;
    move = move === 'X' ? 'O' : 'X';
  }
}
console.log(fields)

