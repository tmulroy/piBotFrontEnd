const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      PubnubMachine = require('./PubnubMachine.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.post('/api/', (request, response) => {
  const pubnubBot = new PubnubMachine();
  const direction = request.body.direction;
  const joint = request.body.joint;
  pubnubBot.sendMessage({ direction, joint })
    .then((pubnubResponse) => {
      response.status(204).send();
    })
    .catch((error) => {
      console.log(`error: ${error}`);
      response.status(500).send({ message: 'error'});
    });
})

module.exports = app;
