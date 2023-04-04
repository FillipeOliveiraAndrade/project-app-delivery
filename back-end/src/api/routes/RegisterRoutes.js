const routes = require('express').Router();
const registerController = require('../controllers/RegisterController');

routes
  .post('/register', registerController.register);

module.exports = routes;