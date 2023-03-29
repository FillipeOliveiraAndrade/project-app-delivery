import { Model,INTEGER, STRING } from "sequelize";
import db from './index';

export default class User extends Model {}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: {
    allowNull: false,
    type: STRING,
  },
  email: {
    allowNull: false,
    type: STRING,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
  role: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  underscore: true,
  timestamp: false,
  modelName: 'users',
});
