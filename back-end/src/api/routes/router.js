const routers = require('express').Router();

const loginRoutes = require('./LoginRoutes');
const productsRoutes = require('./ProductsRoutes');

routers.use(productsRoutes);
routers.use(loginRoutes);

module.exports = routers;