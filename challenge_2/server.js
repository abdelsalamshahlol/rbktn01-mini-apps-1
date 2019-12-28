const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('home page');
});

app.post('/parse', (req, res) => {

});

app.listen(port, () => console.log(`App running on port ${port}.`));