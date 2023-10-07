// User login
const express = require('express');
const router  = express.Router();
const signupQuery = require("../db/queries/add_user");
const checkEmail = require('../db/queries/checkEmail')
router.get('/', (req, res) => {
  // check if logged in
  if (!req.session || !req.session.id) {
    res.render("signup", { id: null });
  } else {
    res.redirect("/user");
  }
});

router.post('/register', async (req, res) => {
  const { email, username, password, passwordConfirm} = req.body;
  const checkingEmail = await checkEmail(email)

  if(checkingEmail){
    return res.sendStatus(400)
  }
  signupQuery
    .addUser(email, username, password, passwordConfirm)
    .then((user) => {
      if (!user) {
        return res.send({error: "addUser error"});
      }
      // get max order ID from Order table and give a new order ID to current use
          // set session cookie
          req.session.id = user.id;
          req.session.name = user.username;
          console.log(req.session);
      res.json({
        id: user.id,
        name: user.username
      })
    })
    .catch((err) => res.send(err));

});

module.exports = router;
