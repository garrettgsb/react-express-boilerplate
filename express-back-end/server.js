const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(cookieSession({
  name: 'session',
  keys: ['12345'],
  httpOnly: false
}));

// DB queries
const db = require("./db/database");

// Mount all /api resources
const apiRoutes = require('./routes/api-routes');
App.use('/api', apiRoutes);

// return session.user_id value for checking log in state
App.get('/loggedIn', (req, res) => {
  res.json(req.session.user_id);
});

// POST REQUEST FOR LOGIN
// Helper - move this to helpers.js later
const validateUser = (email, pass) => {
  const query = `SELECT id, email, password FROM users;`;
  return db.query(query)
    .then(({rows: users}) => {
      for (const user of users) {
        if (email === user.email && pass === user.password) {
          return user.id;
        }
      }
      return false;
    })
    .catch((error) => console.log('err:', error));
};

App.post('/login', (req, res) => {
  const {username, password} = req.body;
  validateUser(username, password)
    .then((response) => {
      console.log('login response', response);
      if (!response) {
        res.redirect('/login');
      } else {
        req.session.user_id = response;
        res.redirect('/');
      }
    })
});
// END OF POST REQ FOR LOGIN

// POST REQUEST FOR LOG OUT
App.post('/logout', (req, res) => {
  req.session = null;
  res.json(req.session);
});
// END OF LOG OUT

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
