import {Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from './index';

export default class Product extends Model {}

Product.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: {
    allowNull: false,
    type: STRING,
    unique: true,
  },
  price: {
    allowNull: false,
    type: DECIMAL(4,2),
  },
  url_image: {
    allowNull: false,
    type: STRING,
    defaultValue: '',
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'products',
});