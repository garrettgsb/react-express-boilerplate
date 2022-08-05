const express = require('express');
const router = express.Router();

// DB queries
const db = require('../db/database');

// Test query and api route
router.get('/users', (req, res) => {
  const userId = req.params.userId;
  const query = `
    SELECT * FROM users 
    WHERE id != $1;
  `;
  return db.query(query, [userId])
  .then(({rows: users}) => {
    res.json(users);
  })
  .catch((error) => console.log('err:', error));
});

// /api/users/:id - return user object
router.get('/users/:id', (req, res) => {
  const userId = req.params.userId;
  const query = `
    SELECT * FROM users
    WHERE id = $1;
  `;
  return db.query(query, [userId])
  .then(({rows: user}) => {
    res.json(user);
  })
  .catch((error) => console.log('err:', error));
});
//router.post(/users/:id)
//router.patch(/users/:id)

// /api/users/:id/messages
router.get('/users/:id/messages', (req, res) => {
  const userId = req.params.userId;
  const query = `
    SELECT * FROM messages
      JOIN users ON users.id = messages.user_id
      WHERE users.id = $1;
  `;  
  return db.query(query, [userId])
    .then(({rows: messages}) => {
      res.json(messages);
    })
    .catch((error) => console.log('err:', error));
})

// /api/users/:id/matching

// router.get('/users/:id/matching', (req, res) => {
//   const userId = req.params.userId;
//   const query = `
//     SELECT * FROM messages
//       JOIN users ON users.id = messages.user_id
//       WHERE users.id = $1;
//   `;  
//   return db.query(query, [userId])
//     .then(({rows: messages}) => {
//       res.json(messages);
//     })
//     .catch((error) => console.log('err:', error));
// })


// UPDATE table_name
// SET column1 = value1, column2 = value2...., columnN = valueN
// WHERE [condition];
// 

module.exports = router;




// const getUserWithId = function(id) {
//   return Promise.resolve(users[id]);
//   return pool
//   .query(`SELECT * FROM users WHERE id = $1`, [id])
//   .then((result) => {
//     console.log(result.rows[0]);
//     return result.rows[0];
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// }