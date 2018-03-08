const express = require('express');
const app = express();

const PORT = 1313;

app.use(express.static('public'));

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(err.status || 500).send('Something broke!')
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


