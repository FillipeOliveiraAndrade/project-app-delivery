const jwt = require('jsonwebtoken');
const { join } = require('path');
const jwtKey = require('fs').readFileSync(join(__dirname, '../../../jwt.evaluation.key'), 'utf-8');
const CustomError = require('../utils/CustomError');

function Auth(req, _res, next) {
    const { authorization } = req.headers;
    if (!authorization) throw new CustomError('401', 'Token not found');

    try {
      const decodedToken = jwt.verify(authorization, jwtKey);
      req.user = decodedToken;
      next();
    } catch (error) {
      throw new CustomError('401', 'Token must be a valid token');
    }
}

module.exports = Auth;