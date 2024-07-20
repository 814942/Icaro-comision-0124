// models/index.js
const bcrypt = require('bcryptjs');

const db = require('../config/database');
const User = require('./user');
const Character = require('./character');
const House = require('./house');

(async () => {
  await db.sequelize.sync({ force: true })
  .then(async () => {
      const adminExists = await User.findOne({ where: { isAdmin: true } });
      if (!adminExists) {
        const hashedPassword = await bcrypt.hash('adminpassword', 10);
        await User.create({
          username: "admin",
          password: hashedPassword,
          isAdmin: true
        });
        console.log('Admin user created');
      } else {
        console.log('Admin user already exists');
      }
    }
  );
  console.log('Database & tables created!');
})();

module.exports = {
  User,
  Character,
  House,
  db,
};
