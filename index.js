const express = require('express');

const app = express();

// route handler

app.get('/', (req, res) => {
  res.send({  hi: 'goodbye' });
});

// listen on dynamic port variable from Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);