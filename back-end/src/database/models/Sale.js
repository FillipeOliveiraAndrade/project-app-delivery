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
      foreignKey: true,
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'seller_id', // chave estrangeira
      foreignKey: true,
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9,2),
      field: 'total_price',
    },
    delivery_address: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_address',
    },
    delivery_number: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_number',
    },
    sale_date: {
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
    modelName: 'Sale',
    tableName: 'sales',
  })

  Sale.associate = ({ User, Product, SaleProduct }) => {
    Sale.belongsTo(User, { foreignKey: 'userId', as: 'user'});
    Sale.belongsTo(User, { foreignKey: 'sellerId', as: 'seller'});
    Sale.hasMany(SaleProduct, { foreignKey: 'saleId', as: 'sale'});
    Sale.belongsToMany(Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
  }

  return Sale;
}
