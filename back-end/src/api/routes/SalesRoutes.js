const routes = require('express').Router();
const SalesController = require('../controllers/SalesController');

routes.post('/sales', SalesController.create);

module.exports = routes;