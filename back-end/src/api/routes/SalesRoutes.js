const routes = require('express').Router();
const salesController = require('../controllers/SalesController');

routes
  .get('/sales', salesController.readAll)
  .post('/sales', salesController.createSale);

module.exports = routes;
