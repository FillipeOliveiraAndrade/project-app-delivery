const { Sale, SaleProduct } = require('../../database/models');

async function readAll() {
  return Sale.findAll();
}

const create = async (sale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = sale;
    const saleDate = new Date();
    const status = 'Pendente';

    const createdSale = await Sale.create({ 
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
    });

    const promises = sale.order.map(({ id, quantity }) => SaleProduct.create({
        saleId: createdSale.id,
        productId: id,
        quantity,
      }));

    await Promise.all(promises);

    return createdSale;
};

module.exports = {
  readAll,
  create,
};
