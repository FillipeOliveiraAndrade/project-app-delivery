const { Sale, SaleProduct, Product, User } = require('../../database/models');

const readAllSales = async () => { 
  const sales = await Sale.findAll(); 
  return sales;
};

async function readSale(saleId) {
  const sales = await Sale.findOne({
    where: {
      id: saleId,
    },
    include: [
      { 
      model: User,
      as: 'seller',
      attributes: ['name'], 
      },
    ],
  });
  return sales;
}

async function readProductBySale(saleId) {
  const sales = await SaleProduct.findAll({
    where: { saleId },
    include: [
      { 
        model: Product, 
        attributes: ['id', 'name', 'price', 'url_image'], 
      },
    ],
  });
  return sales;
}

module.exports = {
  readAllSales,
  readSale,
  readProductBySale,
};
