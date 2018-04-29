const express = require('express');
const bodyarser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connect to mongoDB Database
const mongoURL = 'mongodb://localhost:27017/testmean';
mongoose.connect(mongoURL);

/////////////////////
/////  Routing  /////
/////////////////////

// Configure port
const port = 8080;

// Listen to port
app.listen(port);

console.log(`Server in running on port: ${port}`);

router.get('/api', (request, response) => {
  response.status(200).send({message: 'Hello World!'});
});

router.get('/api/users', (request, response) => {
  let users = [{
    first_name:'Pingouin',
    last_name:'Beau'
  }, {
    first_name:'Corentin',
    last_name:'PD'
  }];

  response.status(200).send(users);
});

app.use(router);

app.use(express.static('public'));
