// express app
const express = require('express');
const bodyParser = require('body-parser');

const app = new express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log('server running on port ' + port);
});

app.post('/save', (req, res) => {
  let userData = req.body.userData;
  console.log({ userData })
  res.json(req.body);
});