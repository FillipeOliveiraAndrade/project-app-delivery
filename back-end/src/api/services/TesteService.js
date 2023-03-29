const { Product } = require('../../database/models');
const { user } = require('../../database/models');

const readAllProducts = async () => Product.findAll();

const readAllUsers = async () => user.findAll();

module.exports = { 
  readAllProducts,
  readAllUsers,
};
