const routes = require('express').Router();
const SalesController = require('../controllers/SalesController');
const Auth = require('../middlewares/Auth');

routes.post('/sales', Auth, SalesController.create);

module.exports = routes;