const routes = require('express').Router();

const testeController = require('../controllers/TesteController');

routes.get('/products', testeController.readAll);
routes.get('/users', testeController.readAllUsers);

module.exports = routes;