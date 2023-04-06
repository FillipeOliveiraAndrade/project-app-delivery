
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_id', // chave estrangeira
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'seller_id', // chave estrangeira
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9,2),
      field: 'total_price',
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_address',
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_number',
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'sale_date',
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    underscored: true,
    timestamps: false,
    modelName: 'sales',
  })

  Sale.associate = ({ User, SaleProduct }) => {
    Sale.belongsTo(User, { foreignKey: 'userId', as: 'user'})
    Sale.belongsTo(User, { foreignKey: 'sellerId', as: 'seller'})
    Sale.hasMany(SaleProduct, { foreignKey: 'saleId', as: 'sale'})
  }

  return Sale;
}

