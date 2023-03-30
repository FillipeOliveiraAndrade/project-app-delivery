'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        field: 'user_id',
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        field: 'seller_id',
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
        field: 'total_price',
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_address',
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_number',
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
