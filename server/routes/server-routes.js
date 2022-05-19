const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    console.log("FAVOURITES REQ BODY", req.body)
    const sql = `SELECT * FROM users;
    `
    db.query(sql)
    .then((results) => {
      res.send(results.rows)
      console.log("INSERT RESULT ROWS", results.rows)
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  })

  router.post("/login", (req, res) => {
    console.log(req.body);

    const sql = `SELECT * FROM users
    WHERE email = '${req.body.email}' AND password = '${req.body.password}';
    `
    db.query(sql)
    .then((results) => {
      if(results.rows.length > 0) {
        res.status(200).json(results.rows[0])
      } else {
        res.sendStatus(401)
      }
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  })
  //   if (loginInfo.email === testUser.email && loginInfo.password === testUser.password) {
  //     setUser({
  //       email: loginInfo.email
  //     });
  //   } else {
  //     console.log("Wrong username or password!")
  //     }
  //   }
  // })

  return router;
};