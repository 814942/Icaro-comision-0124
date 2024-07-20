const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env

const verifyToken = (req, res, next) => {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: "Token not provied" });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(403).json({ message: "Token not valid" });
  }
};

module.exports = verifyToken