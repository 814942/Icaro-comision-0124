const { User } = require('../../models');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users) res.status(200).send("User not found")

    res.json(users);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
}

module.exports = getUsers