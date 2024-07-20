const Character = require('../../models');
const House = require('../../models');

const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Character.update(req.body, { where: { id } });
    if (updated) {
      const updatedCharacter = await Character.findOne({ where: { id }, include: House });
      res.status(200).json(updatedCharacter);
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateCharacter