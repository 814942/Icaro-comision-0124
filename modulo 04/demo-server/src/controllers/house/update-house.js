const House = require('../../models');

const updateHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await House.update(req.body, { where: { id } });
    if (updated) {
      const updatedHouse = await House.findOne({ where: { id } });
      res.status(200).json(updatedHouse);
    } else {
      res.status(404).json({ error: 'House not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateHouse