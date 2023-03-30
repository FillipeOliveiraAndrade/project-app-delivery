const routers = require('express').Router();
const ErrorHandler = require('../middlewares/ErrorHandler');
const loginRoutes = require('./LoginRoutes');
const testeRoutes = require('./TesteRoutes');

routers.use(testeRoutes);
routers.use(loginRoutes);
routers.use(ErrorHandler.handle);

module.exports = routers;