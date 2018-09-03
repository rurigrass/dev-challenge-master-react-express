var express = require('express');
var router = express.Router();

/* GET wongles listing. */
router.get('/', function (req, res, next) {
  res.json([
    {
      idNumber: 0,
      supplier: 'New Co Ltd',
      product: 'Small wongle',
      price: 5
    },
    {
      idNumber: 1,
      supplier: 'New Co Ltd',
      product: 'Large wongle',
      price: 8
    },
    {
      idNumber: 2,
      supplier: 'New Co Ltd',
      product: 'Super wongle',
      price: 12
    },
    {
      idNumber: 3,
      supplier: 'Old Co Ltd',
      product: 'Mini wongle',
      price: 4
    },
    {
      idNumber: 4,
      supplier: 'Old Co Ltd',
      product: 'Small wongle',
      price: 6
    },
    {
      idNumber: 5,
      supplier: 'Old Co Ltd',
      product: 'Large wongle',
      price: 9
    },
    {
      idNumber: 6,
      supplier: 'Old Co Ltd',
      product: 'Super wongle',
      price: 13
    }
  ])
});

module.exports = router;
