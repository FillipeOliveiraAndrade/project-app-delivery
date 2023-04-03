const routers = require('express').Router();

const loginRoutes = require('./LoginRoutes');
const productsRoutes = require('./ProductsRoutes');
const registerRoutes = require('./RegisterRoutes');


routers.use(productsRoutes);
routers.use(loginRoutes);
routers.use(registerRoutes);

module.exports = routers;