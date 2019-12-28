const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const form = new multer({ dest: 'uploads/' });
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client'));

var resultPage = result => (`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>CSV Report Generator</title>
</head>
<body>
  <section>
    <div class="container">
      <div class="row">
        <h1>JSON - CSV Parser</h1>
        <div class="col">
        <textarea>${result}</textarea>
          <form action="/parse" method="POST">
            <label>JSON</label>
            <textarea name="content" cols="30" rows="10"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</body>
<script src="app.js"></script>
</html>
`);


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
  let content = req.file;
  console.log({ ds: req.body, content })
  if (content) {
    // convert the object to CSV string
    let result = '';
    try {
      // Validate input to check if its JSON
      let contentParsed = JSON.parse(content);
      result = columnsCSV(contentParsed) + flatten(contentParsed);
    } catch (e) {
      res.status(422).send(e);
      return;
    }
    console.log({ result })
    let html = resultPage(result)
    res.send(html);
  } else {
    res.sendStatus(422);
  }
});

app.listen(port, () => console.log(`App running on port ${port}.`));
