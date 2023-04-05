const routers = require('express').Router();

const loginRoutes = require('./LoginRoutes');
const productsRoutes = require('./ProductsRoutes');
const registerRoutes = require('./RegisterRoutes');
const adminRoutes = require('./AdminRoutes');

routers.use(productsRoutes);
routers.use(loginRoutes);
routers.use(registerRoutes);
routers.use(adminRoutes);

module.exports = routers;