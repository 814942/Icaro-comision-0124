const { User } = require('../../models');

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) res.status(404).send(`User with id ${req.params.id} not found`);

    await user.destroy();
    res.status(204).send("User deleted successfully");
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
}

module.exports = deleteUser