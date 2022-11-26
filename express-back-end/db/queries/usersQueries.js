const db = require('../index');

const getUserWithEmail = (email) => {
  return db
    .query(`SELECT * FROM users WHERE email=$1;`,[email])
    .then(res => {return Promise.resolve(result.rows[0])})
    .catch(err => {err.message})
};


const addUser = (user) => {
  return db
    .query(`INSERT INTO users (first_name, last_name, email, password_digest, goal, current_weight, goal_weight) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,[user.first_name, user.last_name, user.email, user.password_digest, user.goal, user.current_weight, user.goal_weight])
    .then(res => {return Promise.resolve(result.rows)})
    .catch(err => {err.message})
};