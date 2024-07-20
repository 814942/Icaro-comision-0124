const { DataTypes } = require('sequelize');
const db = require('../config/database');
const House = require('./house');

const Character = db.sequelize.define('Character', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  houseId: {
    type: DataTypes.INTEGER,
    references: {
      model: House,
      key: 'id',
    },
  },
}, {
  tableName: 'characters',
  timestamps: false,
});

Character.belongsTo(House, { foreignKey: 'houseId' });

module.exports = Character;
