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

// Generate the columns string from JSON file
var columnsCSV = function (json) {
  delete json['children'];
  return Object.keys(json).join(',');
}

// Generate the comma separated string containing the content of JSON file
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
    }
  }
  return result;
}

// Validate the JSON provided by user
var isValidJSON = function (json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return false;
  }
}

// Handle the request on the POST route with user file
app.post('/parse', form.single('content'), (req, res) => {
  // read data from the uploaded file
  fs.readFile(req.file.path, 'utf8', (err, text) => {
    if (text) {
      // check if the JSON is valid
      let parsedContent = isValidJSON(text);
      let result = '';
      // convert the object to CSV string
      if (parsedContent) {
        let values = makeCSV(parsedContent);
        result = columnsCSV(parsedContent) + "\n" + values;
      } else {
        res.status(422).json('Invalid JSON');
        return;
      }
      res.json(result);
      return;
    } else {
      res.status(422).json('Invalid file provided');
      return;
    }
  });
});

app.listen(port, () => console.log(`App running on port ${port}.`));
