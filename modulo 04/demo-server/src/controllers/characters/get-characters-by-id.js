const { Character } = require('../../models');
const { House } = require('../../models');

const getCharactersById = async (req, res) => {
  try {
    const characters = await Character.findByPk(req.params.id, { include: House });
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharactersById