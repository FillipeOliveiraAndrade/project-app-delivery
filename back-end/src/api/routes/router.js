const routers = require('express').Router();
const loginRoutes = require('./LoginRoutes');
const testeRoutes = require('./TesteRoutes');
const salesRoutes = require('./SalesRoutes');
const registerRoutes = require('./RegisterRoutes');

routers.use(testeRoutes);
routers.use(loginRoutes);
routers.use(registerRoutes);
routers.use(salesRoutes);

module.exports = routers;