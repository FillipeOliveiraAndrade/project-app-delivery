const routers = require('express').Router();
const loginRoutes = require('./LoginRoutes');
const testeRoutes = require('./TesteRoutes');
const sellerRoutes = require('./SellerRoutes');

routers.use(testeRoutes);
routers.use(loginRoutes);
routers.use(sellerRoutes);

module.exports = routers;