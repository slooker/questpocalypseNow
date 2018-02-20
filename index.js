const express = require('express');
const app = express();

const PORT = 1313;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


