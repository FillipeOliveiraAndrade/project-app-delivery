const customerOrderService = require('../services/CustomerOrdersService');

const readAll = async (req, res) => {
  const result = await customerOrderService.readAllSales();
  console.log('resultado do readAllSales', result);
  return res.status(200).json(result);
};

const readSale = async (req, res) => {
  const { id } = req.params;
  const result = await customerOrderService.readSale(id);
  console.log(result);
  return res.status(200).json(result);
};

const readProductBySale = async (req, res) => {
  const { id } = req.params;
  const result = await customerOrderService.readProductBySale(id);
  const sale = await customerOrderService.readSale(id);
  return res.status(200).json({ products: result, sale });
};

module.exports = {
  readAll,
  readSale,
  readProductBySale,
};
