const House = require('../../models');

const createHouse = async (req, res) => {
  try {
    const house = await House.create(req.body);
    res.status(201).json(house);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createHouse