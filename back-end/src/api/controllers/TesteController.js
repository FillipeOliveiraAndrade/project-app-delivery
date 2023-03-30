const testeService = require('../services/TesteService');

const readAll = async (req, res) => {
  const result = await testeService.readAllProducts();
  return res.status(200).json(result);
};

const readAllUsers = async (req, res) => {
  const result = await testeService.readAllUsers();
  return res.status(200).json(result);
};

module.exports = {
  readAll,
  readAllUsers,
};