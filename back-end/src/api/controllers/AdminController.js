const adminService = require('../services/AdminService');

async function registeredByTheAdmin(req, res, next) {
    try {
      await adminService.registerByAdmin(req.body);
      return res.status(201).json('Created');
    } catch (error) {
      next(error);
    }
}

async function readAllUsers(req, res) {
  const users = await adminService.readAllUsers();
  return res.status(200).json(users);
}

module.exports = {
  registeredByTheAdmin,
  readAllUsers,
};