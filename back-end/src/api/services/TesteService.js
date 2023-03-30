const { Product } = require('../../database/models');
const { User } = require('../../database/models');

const readAllProducts = async () => Product.findAll();

const readAllUsers = async () => User.findAll();

const readUserById = async (email) => User.findOne({ where: { email } });

module.exports = { 
  readAllProducts,
  readAllUsers,
  readUserById,
};
