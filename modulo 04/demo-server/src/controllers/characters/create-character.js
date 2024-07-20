const { Character } = require('../../models');

const createCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(201).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createCharacter