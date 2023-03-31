const routes = require('express').Router();
const sellerController = require('../controllers/SalesController');

routes
  .get('/sales', sellerController.readAll);

module.exports = routes;