// User login
const express = require('express');
const router  = express.Router();
const signupQuery = require("../db/queries/add_user");

router.get('/', (req, res) => {
  // check if logged in
  if (!req.session || !req.session.id) {
    res.render("signup", { id: null });
  } else {
    res.redirect("/user");
  }
});

router.post('/', (req, res) => {
  const { email, password, name, phone} = req.body;
  signupQuery
    .addUser(name, phone, email, password)
    .then((user) => {
      if (!user) {
        return res.send({error: "addUser error"});
      }

      // get max order ID from Order table and give a new order ID to current user
      maxOrderIDQuery.maxOrderID()
        .then((maxOrderID) => {
          if (!maxOrderID) {
            return res.send({error: "cannot get max order ID"});
          }

          // set session cookie
          req.session.id = user.id;
          req.session.name = user.name;
          req.session.orderID = maxOrderID[0].id + 1;
          console.log(req.session);
          res.redirect("/menu");
        });
    })
    .catch((err) => res.send(err));

});

module.exports = router;
