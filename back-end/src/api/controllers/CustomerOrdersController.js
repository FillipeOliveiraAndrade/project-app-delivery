const customerOrderService = require('../services/CustomerOrdersService');

const readAll = async (req, res) => {
  const result = await customerOrderService.readAllSales();
  return res.status(200).json(result);
};

const readAllDetails = async (req, res) => {
  const result = await customerOrderService.readAllSalesDetails();
  return res.status(200).json(result);
};

module.exports = {
  readAll,
  readAllDetails,
};
