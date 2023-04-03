const routers = require('express').Router();
const loginRoutes = require('./LoginRoutes');
const CostumerOrdersRouter = require('./CostumerOrdersRouter');
const registerRoutes = require('./RegisterRoutes');

routers.use(loginRoutes);
routers.use(CostumerOrdersRouter);
routers.use(registerRoutes);

module.exports = routers;