const findAll = require('../services/ProductsService');

async function getAllProducts(_req, res) {
  const products = await findAll();
  return res.status(200).json(products);
}

module.exports = {
  getAllProducts,
};