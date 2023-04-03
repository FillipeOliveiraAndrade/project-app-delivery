const routes = require('express').Router();

const customerController = require('../controllers/CustomerOrdersController');
// const Auth = require('../middlewares/Auth');

routes.get('/customer/orders', customerController.readAll);

module.exports = routes;