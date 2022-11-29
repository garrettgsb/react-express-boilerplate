const db = require('../connection');

const totalDrawings = (userId) => {
  return db.query(`SELECT count(drawings.*) as total_drawings
  FROM drawings
  JOIN users on user_id = users.id
  WHERE user_id = ${userId}
  RETURNING *`)
  .then(data => {
    console.log("data after completed db",data.rows)
    return data.rows;
  });
}