const { Character } = require('../../models');
const { House } = require('../../models');

const getCharacters = async (req, res) => {
  try {
    const characters = await Character.findAll({
      include: House
    })

    if (!characters.length) {
      res.status(404).send("Characters not found")
    }

    res.json(characters)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = getCharacters