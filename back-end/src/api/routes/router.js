const routers = require('express').Router();

const loginRoutes = require('./LoginRoutes');
const salesRoutes = require('./SalesRoutes');
const productsRoutes = require('./ProductsRoutes');
const registerRoutes = require('./RegisterRoutes');

routers.use(productsRoutes);
routers.use(loginRoutes);
routers.use(registerRoutes);
routers.use(salesRoutes);

module.exports = routers;