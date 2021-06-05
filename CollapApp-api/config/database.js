const { Sequelize } = require('sequelize');

// Passing a connection URI
module.exports = new Sequelize('collabapp', 'labber', 'labber', {
  host: 'localhost',
  dialect: 'postgres',
});