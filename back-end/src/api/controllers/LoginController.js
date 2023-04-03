const loginService = require('../services/LoginService');

async function login(req, res, next) {
  try {
    const result = await loginService.login(req.body);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
};