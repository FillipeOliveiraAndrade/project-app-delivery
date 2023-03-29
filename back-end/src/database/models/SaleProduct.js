
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
    modelName: 'sales_products',
  })

  SaleProduct.associate = ({ Sale, Product }) => {
    SaleProduct.belongsTo(Sale, { foreignKey: 'saleId' } );
    SaleProduct.belongsTo(Product, { foreignKey: 'productId' });
  }

  return SaleProduct;
}
