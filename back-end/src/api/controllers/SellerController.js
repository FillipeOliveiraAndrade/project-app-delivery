const sellerService = require('../services/SellerService');

async function readAll(req, res) {
  const result = await sellerService.readAll();
  return res.status(200).json(result);
}

module.exports = {
  readAll,
};