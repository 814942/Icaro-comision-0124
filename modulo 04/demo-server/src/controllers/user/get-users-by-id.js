const { User } = require('../../models');

const getUsersByid = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) res.status(404).send(`User with id ${req.params.id} not found`);

    res.json(user);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
}

module.exports = getUsersByid