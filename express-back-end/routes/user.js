const router = require("express").Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  router.post("/login/:emailpassword", (req, res) => {

    console.log('server received post req:', req.params);
    const email = req.params.emailpassword.split(',')[0];
    console.log('server res for email:', email);
    const password = req.params.emailpassword.split(',')[1];
    console.log('server res for password:', password);

    // let data = [];
    // Reflect.ownKeys(req.body).forEach(key => {
    //   data = JSON.parse(key);
    // })

    // check if use exist with given username and password
    const login = function (email, password) {
      return db.query(`
        SELECT * FROM users 
        WHERE email = $1 AND password = $2;
      `, [email, password])
        .then(res => {
          console.log('Check if user existed in database with correct password:', res.rows[0])
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
        console.log('test1:', user)
        if (user === null) {
          console.log('test2:', user)
          res.send({ error: "Access Denied! Double check your email or passport" })
        } else {
          console.log('test3:', user.id)
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
          // res.json(user.id);
          // return res.redirect('/explore')
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