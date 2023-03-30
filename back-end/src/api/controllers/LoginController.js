const loginService = require('../services/LoginService');

async function login(req, res, next) {
  try {
    const { user, token } = await loginService.login(req.body);
    return res.status(200).json({ payload: { user, token } });
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