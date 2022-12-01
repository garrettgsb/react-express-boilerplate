require('dotenv').config();
const dbQueries = require('./db/queries/profile');
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT;
// console.log(process.env)

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Login Post Route
App.post('/api/login', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  dbQueries.getUserByLogin(name, password)
    .then((users) => {
      return users[0];
    }).then((user) => {
      // console.log(user);
      if (user && user.password) {
        delete user.password;
      }
      return res.json(
        user
      );
    });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express listening on port ${PORT}...`);
});
