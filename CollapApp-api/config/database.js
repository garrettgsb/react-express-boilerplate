const { Sequelize } = require('sequelize');


// Passing a connection URI
module.exports = new Sequelize('collabapp', 'labber', 'labber', {
  host: 'localhost',
  dialect: 'postgres',
  //operatorsAliases:false,

  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 3000,
  //   idle: 10000
  // },
});