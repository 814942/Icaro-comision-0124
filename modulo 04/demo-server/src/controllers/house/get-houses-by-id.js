const House = require('../../models');

const getHousesById = async (req, res) => {
  try {
    const house = await House.findByPk(req.params.id);
    res.json(house);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getHousesById