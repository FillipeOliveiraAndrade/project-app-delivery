
module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'sale_id',
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'product_id',
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    underscored: true,
    timestamps: false,
    modelName: 'SaleProduct',
    tableName: 'sales_products'
  })

  SaleProduct.associate = ({ Sale, Product }) => {
    Product.belongsToMany(Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    Sale.belongsToMany(Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
    SaleProduct.hasMany(Product, {
      foreignKey: 'id',
      otherKey: 'productId',
      as: 'salesProducts',
    })
  }

  return SaleProduct;
}

