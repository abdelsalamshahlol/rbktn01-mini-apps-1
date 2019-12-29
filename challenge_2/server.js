const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

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


var columnsCSV = function (json) {
  delete json['children'];
  return Object.keys(json).join(',');
}

var makeCSV = function (json) {
  let result = arguments[1] || '';
  let sep = "";
  let lineBreak = '\n';
  for (let key in json) {
    if (key !== 'children') {
      result += sep + json[key];
      sep = ",";
    } else {
      for (let k in json[key]) {
        result += lineBreak + makeCSV(json[key][k]);
      }
      return result;
    }
  }
}

var isValidJSON = function (json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return false;
  }
}

app.post('/parse', form.single('content'), (req, res) => {
  // read data from the uploaded file
  fs.readFile(req.file.path, 'utf8', (err, text) => {
    if (text) {
      // check if the JSON is valid
      let parsedContent = isValidJSON(text);
      let result = '';

      if (parsedContent) {
        // convert the object to CSV string
        let values = makeCSV(parsedContent);
        result = columnsCSV(parsedContent) + "\n" + values;
      } else {
        res.status(422).send('Invalid JSON');
        return;
      }
      let html = resultPage(result);
      res.send(html);
      return;
    } else {
      res.status(422).send('Invalid file provided');
      return;
    }
  });
});

app.listen(port, () => console.log(`App running on port ${port}.`));
