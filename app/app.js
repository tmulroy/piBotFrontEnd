const express = require('express'),
      app = express(),
      morgan = require('morgan'),
      bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.post('/api/')
