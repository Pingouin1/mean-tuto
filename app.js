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

app.use(express.static('public'));

let params = {
  router: router
};

app.use('/', require('./modules/users/route')(params));
