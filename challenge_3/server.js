// express app
const express = require('express');
const app = new express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log('server running on port ' + port);
});
