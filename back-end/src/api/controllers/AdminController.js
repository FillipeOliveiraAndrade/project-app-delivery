const adminService = require('../services/AdminService');

async function registeredByTheAdmin(req, res, next) {
    try {
      await adminService.registerByAdmin(req.body);
      return res.status(201).json('Created');
    } catch (error) {
      next(error);
    }
}

module.exports = {
  registeredByTheAdmin,
};