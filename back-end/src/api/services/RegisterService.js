const crypto = require('crypto');
const { User } = require('../../database/models');
const CustomError = require('../utils/CustomError');

async function register(dto) {
    const { name, email, password } = dto;
    const md5Hash = crypto.createHash('md5').update(password).digest('hex');
    const searchEmail = await User.findOne({ where: { email } });

    if (searchEmail) {
        throw new CustomError('409', 'Conflict');
    }

    await User.create({ 
        name,
         email,
         password: md5Hash,
         });
    return { type: null, message: '' };
}

module.exports = {
    register,
};