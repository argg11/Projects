const express = require('express');
const app = express();
const db = require('./db');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const { error } = require('console');

app.get('/', function (req, res) {
  res.send('wassup')
})

const personRouter = require('./routes/personRoutes');

app.use('/person',personRouter);


app.listen(3000, () => {
  console.log('listening on port 3000')
})
