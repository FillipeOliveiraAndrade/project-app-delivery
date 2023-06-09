
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'customer'
    },
  }, {
    underscored: true,
    timestamps: false,
    modelName: 'users',
  });

  User.associate = ({ Sale }) => {
    User.hasMany(Sale, { foreignKey: 'userId', as: 'userId' })
    User.hasMany(Sale, { foreignKey: 'sellerId', as: 'sellerId' })
  }

  return User;
}
