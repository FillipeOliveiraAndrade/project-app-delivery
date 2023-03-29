import { Model, INTEGER } from 'sequelize';
import Product from './Product';
import Sale from './Sale';
export default class SaleProduct extends Model {}


SaleProduct.init({
  saleId: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
    field: 'sale_id',
  },
  productId: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
    field: 'product_id',
  },
  quantity: {
    allowNull: false,
    type: INTEGER,
  }
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'sales_products',
});

SaleProduct.belongsTo(Sale, { foreignKey: 'saleId' });
SaleProduct.belongsTo(Product, { foreignKey: 'productId' });

Sale.hasMany(SaleProduct, { foreignKey: 'saleId' });
Product.hasMany(SaleProduct, { foreignKey: 'productId' });