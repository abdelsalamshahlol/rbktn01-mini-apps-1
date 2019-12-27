let fields = document.getElementsByClassName('field');
for (let field of fields) {
  field.onclick = (e) => {
    field.children[0].innerHTML = 'X';
  }
}
console.log(fields)

