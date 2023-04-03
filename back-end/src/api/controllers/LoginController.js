// const { join } = require('path');
// const jwt = require('jsonwebtoken');
// const jwtKey = require('fs').readFileSync(join(__dirname, '../../../jwt.evaluation.key'), 'utf-8');
const loginService = require('../services/LoginService');

async function login(req, res, next) {
  try {
    const result = await loginService.login(req.body);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function getUserRole(req, res) {
  const { email } = req.user;
  const role = await loginService.getUserRole(email);
  return res.status(200).json({ role });
}

module.exports = {
  login,
  getUserRole,
};