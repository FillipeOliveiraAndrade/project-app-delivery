const { Sale, SaleProduct, User } = require('../../database/models');

async function findUserByEmail(email) {
  return User.findOne({ where: { email } });
}

async function create(sale) {
  const { id: userId } = await findUserByEmail(sale.email);
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber } = sale;

    const { id } = await Sale.create({
      userId,
      sellerId, 
      totalPrice, 
      deliveryAddress, 
      deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente',
    });

  //   const promises = sale.order.map(({ id, quantity }) => SaleProduct.create({
  //       saleId: createdSale.id,
  //       productId: id,
  //       quantity,
  //     }));

  //   await Promise.all(promises);

    return id;
}

module.exports = { create };
