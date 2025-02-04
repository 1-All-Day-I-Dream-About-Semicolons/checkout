var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var APIrouter = require('./api.js');

var app = express();

mongoose.connect('mongodb://localhost/checkout');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist' )));
app.use('/products/:productId',express.static(path.join(__dirname, '/../client/dist' )));
app.use('/api', APIrouter);

module.exports = app;