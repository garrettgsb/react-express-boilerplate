const cookieSession = require('cookie-session');
const { application } = require('express');
const Express = require('express');
const userQueries = require('../db/queries/usersQueries');
const router = Express.Router();


// create the routes for the user used 1 as a demo to show the data that would be represented if a user was login

//CRUD REST API users ROUTES


//Login validation
const login = (email, password) => {
  return userQueries.getUserWithEmail(email)
    .then(user => {
      if (!user) return null;
      if (password === user.password_digest) {
        return user;
      }
      return null;
    });
};

//UPDATE - Put login
router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  login(email, password)
    .then(user => {
      if (!user) {
        res.status(401).json()
      } else {
        return res.json(user)
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
});





module.exports = router;