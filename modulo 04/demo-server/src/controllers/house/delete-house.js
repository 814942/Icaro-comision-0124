const House = require('../../models');

const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await House.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'House not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteHouse