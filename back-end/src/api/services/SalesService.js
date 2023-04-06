const { Sale, SaleProduct, User } = require('../../database/models');

async function readAll() {
  return Sale.findAll();
}

async function findUserByEmail(email) {
  return User.findOne({ where: { email } });
}

async function create(sale) {
  const { id: userId } = await findUserByEmail(sale.email);
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, cartItems } = sale;

    const { id } = await Sale.create({
      userId,
      sellerId, 
      totalPrice, 
      deliveryAddress, 
      deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente',
    });

    await Promise.all(cartItems.map(({ productId, quantity }) => SaleProduct.create({
      saleId: id,
      productId,
      quantity,
    })));

    return id;
}

module.exports = {
  readAll,
  create,
};
