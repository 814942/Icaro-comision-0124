// models/user.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;
