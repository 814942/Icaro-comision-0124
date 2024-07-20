const Character = require('../../models');

const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Character.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteCharacter