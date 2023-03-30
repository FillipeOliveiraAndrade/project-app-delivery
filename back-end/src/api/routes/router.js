const routers = require('express').Router();
const loginRoutes = require('./LoginRoutes');
const testeRoutes = require('./TesteRoutes');

routers.use(testeRoutes);
routers.use(loginRoutes);

module.exports = routers;