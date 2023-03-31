const routers = require('express').Router();
const loginRoutes = require('./LoginRoutes');
const testeRoutes = require('./TesteRoutes');
const salesRoutes = require('./SalesRoutes');

routers.use(testeRoutes);
routers.use(loginRoutes);
routers.use(salesRoutes);

module.exports = routers;