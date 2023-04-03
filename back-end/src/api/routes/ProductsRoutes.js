const routes = require('express').Router();

const productsController = require('../controllers/ProductsController');
// const Auth = require('../middlewares/Auth');

routes.get('/products', productsController.getAllProducts);

module.exports = routes;