const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env

const verifyToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if(!authorizationHeader || !authorizationHeader.startsWith("Bearer") ) {
        return res.status(401).json({ error: "You are not authorized to access this. No token"})
    }

    const token = authorizationHeader.split(" ")[1];

    const decoded = jwt.verify(token, JWT_SECRET);
    if(!decoded || !decoded.id ) {
        return res.status(401).json({ error: "Invalid token"})
    }

    const user = await User.findByPk(decoded.id)
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    delete req.user.password;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Token not valid" });
  }
};

module.exports = verifyToken