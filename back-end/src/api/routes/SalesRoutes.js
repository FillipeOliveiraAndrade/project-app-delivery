const customerRoutes = require('express').Router();
const SalesController = require('../controllers/SalesController');

customerRoutes.post('/', SalesController.createSale);

module.exports = customerRoutes;