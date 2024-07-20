const bcrypt = require('bcryptjs');

const { User } = require('../../models');

const editUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) res.status(404).send(`User with id ${req.params.id} not found`);

    user.username = req.body.username || user.username;
    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }

    await user.save();
    res.json(user);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
}

module.exports = editUser