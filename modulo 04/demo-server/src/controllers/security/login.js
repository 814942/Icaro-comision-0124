const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const { JWT_SECRET } = process.env

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { dataValues: user } = await User.findOne({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1d' });
      res.status(200).json({ username: user.username, token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    return res.status(500).send("Internal server error" );
  }
};

module.exports = login