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
  console.log(userId)
  return db.query(`
  SELECT drawings.*
  FROM drawings
  JOIN users on user_id = users.id
  WHERE user_id = $1;`, [userId])
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

const saveDrawing = (userId, drawing) => {
  
  return db.query(`
  INSERT INTO drawings(user_id,img_url)
  VALUES($1,$2)
  RETURNING *;`,[userId,drawing])
  .then(data => {
    return data.rows;
  })
  .catch(err => {
    return err.message;
  });
}

module.exports = { getUsers, getUserById, getUserByLogin, getDrawingsByUserId, getTotalDrawings, saveDrawing };