const chai = require('chai');
const express = require('express');
const bodyParser = require('body-parser');

const expect = chai.expect;

const app = express();
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  next()
});

app.get('/user/:id', (req, res) => {
  res.end(JSON.stringify({
    id: 1,
    name: 'God'
  }));
});
module.exports = app

