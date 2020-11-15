var express = require('express');
var mongoose = require('mongoose');
var APIrouter = require('/home/rolo/Documents/SEI-hrsf131/checkout/server/api.js');

var app = express();

mongoose.connect('mongodb://localhost/checkout');
app.use(express.json());

app.use('/api', APIrouter);

const PORT = 3005;
app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}`);
});