const routes = require('express').Router();

const customerController = require('../controllers/CustomerOrdersController');
// const Auth = require('../middlewares/Auth');

routes.get('/customer/orders', customerController.readAll);

routes.get('/customer/orders/:id', customerController.readProductBySale);

module.exports = routes;