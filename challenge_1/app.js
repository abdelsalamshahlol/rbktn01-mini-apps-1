let fields = document.getElementsByClassName('field');
for (let field of fields) {
  field.onclick = (e) => {
    console.log(e)
  }
}
console.log(fields)

