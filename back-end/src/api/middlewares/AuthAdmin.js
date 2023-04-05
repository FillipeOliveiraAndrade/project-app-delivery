const CustomError = require('../utils/CustomError');

const authAdmin = (req, _res, next) => {
  const { role } = req.user;

  if (role !== 'administrator') {
    throw new CustomError('401', 'Not authorized');
  }

  return next();
};

module.exports = authAdmin;