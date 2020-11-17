var express = require('express');
var dbModels = require('/home/rolo/Documents/SEI-hrsf131/checkout/server/db/schemas.js');
var router = express.Router();



router.route('/products')
  .get((req, res) => {
    dbModels.findAll((err, response) => {
      if (err) {
        console.log('request failed', err);
        res.status(404).end();
      } {
        console.log(response);
        res.status(200).json(response);
      }
    })
  });
router.route('/products/:productId/')
.get((req, res) => {
    dbModels.findProductById(req.params.productId, (err, response) => {
        if (err) {
            console.log('request failed', err);
            res.status(404).end();
          } {
              if (response.length) {
                console.log('request successful', response);
                res.status(200).json(response);
              } else {
                res.status(404).end();
              }
           

          }
    })
});



  module.exports = router;
