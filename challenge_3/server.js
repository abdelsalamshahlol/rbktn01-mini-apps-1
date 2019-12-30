// express app
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = new express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log('server running on port ' + port);
});

app.post('/save', (req, res) => {
  let userData = req.body;

  db.saveOrder(userData, (err, result) => {
    if (err) {
      res.status(422).send(err);
      return;
    }
    res.json(result);
    return;
  });
});