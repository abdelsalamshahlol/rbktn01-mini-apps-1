const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const form = new multer();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('home page');
});

app.post('/parse', form.none(), (req, res) => {
  let content = req.body.content;
  if (content) {
    // convert the object to CSV string
    let x = JSON.parse(content);
    res.json(x);
  } else {
    res.sendStatus(422);
  }

});

app.listen(port, () => console.log(`App running on port ${port}.`));
