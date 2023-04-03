const { Product } = require('../../database/models');

async function findAll() {
  const products = await Product.findAll();
  return products;
}

module.exports = findAll;