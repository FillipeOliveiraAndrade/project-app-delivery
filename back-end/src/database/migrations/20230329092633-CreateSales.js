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
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        field: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        field: 'seller_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: true,
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
        field: 'total_price',
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_address',
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_number',
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
        defaultValue: new Date(),
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'Pendente',
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
