const SalesService = require('../services/SalesService');

async function create(req, res) {
  const result = await SalesService.create(req.body);
  return res.status(201).json(result);
}

module.exports = { create };
