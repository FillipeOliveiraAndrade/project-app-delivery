const routers = require('express').Router();
const loginRoutes = require('./LoginRoutes');
const testeRoutes = require('./TesteRoutes');
const registerRoutes = require('./RegisterRoutes');

routers.use(testeRoutes);
routers.use(loginRoutes);
routers.use(registerRoutes);

module.exports = routers;