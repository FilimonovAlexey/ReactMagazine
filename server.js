const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Hello")
});

mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    app.listen(port, () => {
      console.log('App listen ' + port)
    })
  })
