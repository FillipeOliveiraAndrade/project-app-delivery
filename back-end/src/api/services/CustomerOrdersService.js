const { Sale } = require('../../database/models');

const readAllSales = async () => { 
  const sales = await Sale.findAll(); 
  return sales;
};

const readAllSalesDetails = async () => { 
  const sales = await Sale.findAll(); 
  return sales;
};

module.exports = {
  readAllSales,
  readAllSalesDetails,
};
