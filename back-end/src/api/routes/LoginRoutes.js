const routes = require('express').Router();
const loginController = require('../controllers/LoginController');

routes
  .post('/login', loginController.login);

module.exports = routes;