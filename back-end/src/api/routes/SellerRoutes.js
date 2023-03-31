const routes = require('express').Router();
const sellerController = require('../controllers/SellerController');

routes
  .get('/seller', sellerController.readAll);

module.exports = routes;