const router = require("express").Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {
  router.get("/login", (req, res) => {
    res.send("Login Page");
  });

  router.post("/login", (req, res) => {
    console.log(req)
    // check if use exist with given username and password
    const login = function (email, password) {
      return db.query(`
        SELECT * FROM users WHERE email = $1;
      `, [email])
        .then(user => {
          if (password === user.password) {
            return user;
          }
          return null;
        });
    }
    const { email, password } = req.body;
    console.log(req.body)
    login(email, password)
      .then(user => {
        if (!user) {
          res.send({ error: "error" })
        } else {
          req.session.userId = user.id;
          res.send({
            user: {
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              id: user.id
            }
          });
        }
      })
      .catch(err => console.log(err));
  })

  router.get("/profile", (req, res) => {
    db.query(`
      SELECT * FROM users WHERE id = $1;
    `, [req.params.id])
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err));
  });

  return router;
}