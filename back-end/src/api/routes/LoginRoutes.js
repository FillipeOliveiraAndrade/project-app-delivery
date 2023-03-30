const routes = require('express').Router();
const loginController = require('../controllers/LoginController');
const Auth = require('../middlewares/Auth');

routes
  .post('/login', loginController.login)
  .get('/login/role', Auth, loginController.getUserRole);

module.exports = routes;