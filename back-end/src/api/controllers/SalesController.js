const SalesService = require('../services/SalesService');

async function readAll(req, res) {
  const result = await SalesService.readAll();
  return res.status(200).json(result);
}

async function create(req, res) {
  const result = await SalesService.create(req.body);
  return res.status(201).json(result);
}

module.exports = {
  create,
  readAll,
};
