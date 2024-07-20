const { DataTypes } = require('sequelize');
const db = require('../config/database');

const House = db.sequelize.define('House', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tagline: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'houses',
  timestamps: false,
});

module.exports = House;
