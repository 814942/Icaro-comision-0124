const bcrypt = require('bcryptjs');

const { User } = require('../../models');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.json(user);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

module.exports = register