const { Sale } = require('../../database/models');

async function readAll() {
  return Sale.findAll();
}

module.exports = {
  readAll,
};