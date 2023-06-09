const jwt = require('jsonwebtoken');
const md5 = require('js-md5');
const { join } = require('path');
const jwtKey = require('fs').readFileSync(join(__dirname, '../../../jwt.evaluation.key'), 'utf-8');
const CustomError = require('../utils/CustomError');
const { User } = require('../../database/models');

async function login(dto) {
  const { email, password } = dto;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new CustomError('404', 'User not found');
  }

  const hashEntrada = md5(password);
  if (hashEntrada !== user.password) {
    throw new CustomError('400', 'Invalid email or password');
  }

  const payloadUser = {
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payloadUser, jwtKey);

  return { ...payloadUser, token };
}

module.exports = { 
  login,
};