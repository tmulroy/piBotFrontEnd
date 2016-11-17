const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      PubnubMachine = require('./PubnubMachine.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.post('/api/', (request, response) => {
  response.status(200).send({direction: request.body.direction,
  joint: request.body.joint})
})

module.exports = app;
