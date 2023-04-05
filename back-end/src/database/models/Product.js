module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4,2),
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: '',
      field: 'url_image',
    },
  }, {
    underscored: true,
    timestamps: false,
    modelName: 'Product',
    tableName: 'products',
  })

  Product.associate = ({ Sale, SaleProduct }) => {
    Product.belongsToMany(Sale, {
      as: 'salesProducts',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
  
    Product.belongsToMany(Sale, {
      as: 'featuredProducts',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
  }

  return Product;
}
