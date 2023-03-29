const { Product } = require('../../database/models');
const { User } = require('../../database/models');

const readAllProducts = async () => Product.findAll();

const readAllUsers = async () => User.findAll();

module.exports = { 
  readAllProducts,
  readAllUsers,
};
