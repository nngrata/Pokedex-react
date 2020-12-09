const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;
app.use('/public', express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  }
);
app.listen(PORT);


