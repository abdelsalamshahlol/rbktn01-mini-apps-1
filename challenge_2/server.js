const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const form = new multer();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client'));

app.get('/', (req, res) => {

  // res.send('home page');
});

var columnsCSV = function (obj) {
  let columns = '';
  let tmp = Object.keys(obj);

  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] !== 'children') {
      columns += tmp[i];
      if (i < tmp.length - 2) {
        columns += ',';
      } else {
        columns += '\n';
      }
    }
  }
  return columns;
}

var flatten = function (obj) {
  let res = arguments[1] || '';
  let data = Object.values(obj);
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'object') {
      res = flatten(data[i], res);
    } else {
      res += data[i];
      if (i !== data.length - 2) {
        res += ',';
      } else {
        res += '\n';
      }
    }
  }
  return res;
}

app.post('/parse', form.single('content'), (req, res) => {
  let content = req.body.content;
  if (content) {
    // convert the object to CSV string
    let result = '';
    try {
      // Validate input to check if its JSON
      let object = JSON.parse(content);
      result = columnsCSV(object) + flatten(object);
    } catch (e) {
      res.status(422).send(e);
      return;
    }
    res.send(result);
  } else {
    res.sendStatus(422);
  }
});

app.listen(port, () => console.log(`App running on port ${port}.`));
