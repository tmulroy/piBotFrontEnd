const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.post('/api/', (request, response) => {

})

module.exports = app;
