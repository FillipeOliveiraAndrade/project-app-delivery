const routers = require('express').Router();
const loginRoutes = require('./LoginRoutes');
const salesRoutes = require('./SalesRoutes');
const testeRoutes = require('./TesteRoutes');

routers.use(testeRoutes);
routers.use(loginRoutes);
routers.use(salesRoutes);

module.exports = routers;