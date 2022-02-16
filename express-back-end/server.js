// load .env data into process.env
require('dotenv').config({
  path: '../.env'
});

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const PORT = process.env.PORT || 8080;

// Express Configuration
App.use(BodyParser.urlencoded({
  extended: false
}));
App.use(BodyParser.json());
App.use(Express.static('public'));

App.use(cookieParser());

// Session Cookie setup
App.use(
  cookieSession({
    name: 'session',
    keys: ['lighthouse', 'midterm'],
  })
);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const plantsRoutes = require("./routes/plants");

App.use("/api/users", usersRoutes);
App.use("/api/plants", plantsRoutes);

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// Login
App.get('/login/:user_id', (req, res) => {
  console.log('req.params.user_id', req.params.user_id);
  req.session.userId = req.params.user_id;
  res.cookie('userId', req.params.user_id);
  res.redirect('/dashboard');
});

// Logout
App.get('/logout', (req, res) => {
  req.session = null;
  res.clearCookie("userId");
  return res.redirect('/');
});


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});