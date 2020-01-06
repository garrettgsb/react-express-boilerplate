const router = require("express").Router();

module.exports = (db) => {

  router.post("/login/:emailpassword", (req, res) => {

    const email = req.params.emailpassword.split(',')[0];
    const password = req.params.emailpassword.split(',')[1];

    // check if use exist with given username and password
    const login = function (email, password) {
      return db.query(`
        SELECT * FROM users 
        WHERE email = $1 AND password = $2;
      `, [email, password])
        .then(res => {
          const user = res.rows[0];
          if (user) {
            return user;
          } else {
            return null;
          }
        })
    }

    // login(data.email, data.password)
    login(email, password)
      .then(user => {
        if (user === null) {
          res.send({ error: "Access Denied! Double check your email or passport" })
        } else {
          req.session.userId = user.id;
          res.send({
            user: {
              id: user.id,
              firstname: user.first_name,
              lastname: user.last_name,
              email: user.email,
              facebook: user.facebook
            }
          })
        }
      })
      .catch(err => console.log(err));
  })

  // router.get("/profile", (req, res) => {
  //   res.send('profile page')
  // db.query(`
  //   SELECT * FROM users WHERE id = $1;
  // `, [req.params.id])
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => console.log(err));
  // });

  return router;
}