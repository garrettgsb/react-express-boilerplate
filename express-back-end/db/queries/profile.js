const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      console.log("Get Users DB Query Completed: ", data.rows);
      return data.rows;
    });
};

const getUserById = (userId) => {
  return db.query(`SELECT * FROM users
  WHERE id = ${userId};`)
    .then(data => {
      console.log("Get User From Id DB Query Completed: ", data.rows);
      return data.rows;
    });
};

const getUserByLogin = (argName, argPassword) => {
  console.log(`LOOK HERE: `, argName, argPassword, typeof argName, typeof argPassword)
  
  return db.query(`SELECT * FROM users
  WHERE users.name = $1 AND users.password = $2;`, [argName, argPassword])
    .then(data => {
      console.log("Get User From Login DB Query Completed: ", data.rows);
      return data.rows;
    }).catch(err => {
      return err.message;
    });
};

const getDrawingsByUserId = (userId) => {
  return db.query(`SELECT drawings.*
  FROM drawings
  JOIN users on user_id = users.id
  WHERE user_id = ${userId}
  RETURNING *`)
    .then(data => {
      console.log("Drawings by User ID DB Query Completed: ", data.rows);
      return data.rows;
    });
};

const getTotalDrawings = (userId) => {
  return db.query(`SELECT count(drawings.*) as total_drawings
  FROM drawings
  JOIN users on user_id = users.id
  WHERE user_id = ${userId}
  RETURNING *`)
    .then(data => {
      console.log("Total Drawings Count DB Query Completed: ", data.rows);
      return data.rows;
    });
};

module.exports = { getUsers, getUserById, getUserByLogin, getDrawingsByUserId, getTotalDrawings };