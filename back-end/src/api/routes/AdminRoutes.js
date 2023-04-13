const routes = require('express').Router();
const adminController = require('../controllers/AdminController');
const Auth = require('../middlewares/Auth');
const authAdmin = require('../middlewares/AuthAdmin');

routes
  .post('/register/admin', Auth, authAdmin, adminController.registeredByTheAdmin)
  .get('/register/admin', adminController.readAllUsers);

module.exports = routes;