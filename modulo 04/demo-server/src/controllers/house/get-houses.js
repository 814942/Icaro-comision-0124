const House = require('../../models');

const getHouses = async (req, res) => {
  try {
    const houses = await House.findAll();
    res.json(houses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getHouses