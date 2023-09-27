//User Login
const express = require("express");
const router = express.Router();
const loginQuery = require("../db/queries/get_user_by_email");


router.post('/login', (req, res) => {
  const { email, password } = req.body;
  loginQuery.getUserWithEmail(email)
  .then((user) => {
    if(!user) {
      return res.send({ error: "no user with that id"});
    }
    if (password !==user[0].password) {
      return res.send({error: "Incorrect Password"})
    }

    req.session.id = user[0].id
    req.session.name = user[0].username
    console.log(req.session)

  })
})

module.exports = router;