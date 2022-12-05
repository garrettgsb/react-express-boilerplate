const db = require("../index");

const getUsers = () => {
  return db
    .query(`SELECT * FROM users;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const getUserWithEmail = (email) => {
  return db
    .query(`SELECT * FROM users WHERE email=$1;`, [email])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      err.message;
    });
};

const addUser = (user) => {
  return db
    .query(
      `INSERT INTO users (first_name, last_name, email, password_digest, goal, current_weight, goal_weight) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
      [
        user.first_name,
        user.last_name,
        user.email,
        user.password_digest,
        user.goal,
        user.current_weight,
        user.goal_weight,
      ]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

// const updateUsers = async (id, userInfo) => {
//   const setColumns = Object.keys(userInfo)
//     .map((property, index) => `${property}=$${index + 2}`)
//     .join(", ");

//   const queryDef = {
//     text: `
//     UPDATE users
//     SET ${setColumns}
//     WHERE id = $1 RETURNING *`,
//     values: [id, ...Object.values(userInfo)],
//   };
//   const data = await db.query(queryDef);
//   return data.rows[0];
// };

const updateUsers = (user) => {
  return db
    .query(
      `UPDATE users SET goal=$1, current_weight=$2, goal_weight=$3 WHERE id=1 RETURNING *;`,
      [user.goal, user.current_weight, user.goal_weight]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

module.exports = {
  getUsers,
  getUserWithEmail,
  addUser,
  updateUsers,
};
