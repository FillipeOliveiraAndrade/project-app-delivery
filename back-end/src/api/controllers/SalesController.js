const SalesService = require('../services/SalesService');

const createSale = async (req, res) => {
  try {
    const sale = req.body;
    const createdSale = await SalesService.create(sale);
    res.status(201).json(createdSale);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createSale };
