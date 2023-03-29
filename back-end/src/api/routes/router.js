const routers = require('express').Router();

const testeRoutes = require('./TesteRoutes');

routers.use(testeRoutes);

module.exports = routers;