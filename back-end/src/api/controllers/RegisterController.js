const registerService = require('../services/RegisterService');

async function register(req, res, next) {
    try {
await registerService.register(req.body);
    
    return res.status(201).json('Created');
    } catch (error) {
        next(error);
    }
}

module.exports = {
  register,
};