import { Model, INTEGER, DECIMAL, STRING, DATE } from "sequelize";
import db from './index';
import User from "./User";

export default class Sale extends Model {}

Sale.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  userId: {
    allowNull: false,
    type: INTEGER,
    field: 'user_id', // chave estrangeira
  },
  sellerId: {
    allowNull: false,
    type: INTEGER,
    field: 'seller_id', // chave estrangeira
  },
  totalPrice: {
    allowNull: false,
    type: DECIMAL(9,2),
    field: 'total_price',
  },
  delivery_address: {
    allowNull: false,
    type: STRING,
    field: 'delivery_address',
  },
  delivery_number: {
    allowNull: false,
    type: STRING,
    field: 'delivery_number',
  },
  sale_date: {
    allowNull: false,
    type: DATE,
    field: 'sale_date',
  },
  status: {
    allowNull: false,
    type: STRING,
  }
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'sales',
});

Sale.belongsTo(User, { foreignKey: 'userId' });
Sale.belongsTo(User, { foreignKey: 'sellerId' });

User.hasMany(Sale, { foreignKey: 'userId' });
User.hasMany(Sale, { foreignKey: 'sellerId' });