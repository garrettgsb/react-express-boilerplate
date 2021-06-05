const { DataTypes } = require("sequelize");
const db = require('../config/database');

const Users = db.define('Users', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  github: {
    type: DataTypes.STRING,
    allowNull: true
  },
  slack: {
    type: DataTypes.STRING,
    allowNull: true
  },
  twitter: {
    type: DataTypes.STRING,
    allowNull: true
  },
  facebook: {
    type: DataTypes.STRING,
    allowNull: true
  },
  discord: {
    type: DataTypes.STRING,
    allowNull: true
  },
  zoom: {
    type: DataTypes.STRING,
    allowNull: true
  },
  schedule: {
    type: DataTypes.STRING,
    allowNull: true
  },
  is_mentor: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {
  // Other model options go here
});

module.exports = Users;