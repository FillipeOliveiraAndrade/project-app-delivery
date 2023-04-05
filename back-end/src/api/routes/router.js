const routers = require('express').Router();
const loginRoutes = require('./LoginRoutes');
const CostumerOrdersRouter = require('./CostumerOrdersRouter');
const salesRoutes = require('./SalesRoutes');
const productsRoutes = require('./ProductsRoutes');
const registerRoutes = require('./RegisterRoutes');
const adminRoutes = require('./AdminRoutes');

routers.use(loginRoutes);
routers.use(CostumerOrdersRouter);
routers.use(salesRoutes);
routers.use(registerRoutes);
routers.use(adminRoutes);

module.exports = routers;