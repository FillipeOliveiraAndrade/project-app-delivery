const { Sale, SaleProduct, Product } = require('../../database/models');

const readAllSales = async () => { 
  const sales = await Sale.findAll(); 
  return sales;
};

async function readSale(saleId) {
  const sales = await Sale.findOne({
    where: {
      id: saleId,
    },
  });
  return sales;
}

async function readProductBySale(saleId) {
  const sales = await SaleProduct.findAll({
    where: {
      saleId,
    },
    include: [{
      model: Product,
      // as: 'salesProducts',
      // required: true,
    }],
  });
  return sales;
}

module.exports = {
  readAllSales,
  readSale,
  readProductBySale,
};
