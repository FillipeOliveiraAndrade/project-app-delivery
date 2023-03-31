'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 3,
        seller_id: 3,
        total_price: 50.25,
        delivery_address: "Rua Claudio Nunes, centro",
        delivery_number: "80",
        sale_date: new Date(),
        status: 'entregue'
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 3,
        total_price: 125.10,
        delivery_address: "Av. Rui garcia, vila aurora",
        delivery_number: "850",
        sale_date: new Date(),
        status: 'pendente'
      },
      {
        id: 3,
        user_id: 3,
        seller_id: 3,
        total_price: 14.37,
        delivery_address: "Rua Carlos Abraão, centro",
        delivery_number: "6",
        sale_date: new Date(),
        status: 'preparando'
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
