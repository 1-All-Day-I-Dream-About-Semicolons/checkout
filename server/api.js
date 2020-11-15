var express = require('express');
var dbModels = require('/home/rolo/Documents/SEI-hrsf131/checkout/server/db/schemas.js');
var router = express.Router();



router.route('/')
  .get((req, res) => {
    dbModels.findAll((err, response) => {
      if (err) {
        console.log('request failed', err);
        res.end();
      } {
        console.log(response);
        res.json(response);
      }
    })
  });

  module.exports = router;
