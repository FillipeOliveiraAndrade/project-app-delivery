const routes = require('express').Router();
const salesController = require('../controllers/SalesController');
const Auth = require('../middlewares/Auth');

routes
  .get('/sales', salesController.readAll)
  .post('/sales', Auth, salesController.create);

module.exports = routes;
