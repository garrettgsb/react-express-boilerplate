const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const db = require('./lib/db');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

App.get('/api/users', (req, res) => {
  const data = db.query("SELECT * FROM users")
  .then(response => {
    res.json({
      message: "Users seem to work!",
      users: response.rows
    })
  })
});

App.get('/api/artworks', (req, res) => {
  const data = db.query("SELECT * FROM artworks")
  .then(response => {
    res.json({
      message: "Artwork seems to work!",
      artworks: response.rows
    })
  })
});

App.get('/api/friends', (req, res) => {
  const data = db.query("SELECT * FROM friends")
  .then(response => {
    res.json({
      message: "Friends seem to work!",
      friends: response.rows
    })
  })
});

App.get('/api/jobs', (req, res) => {
  const data = db.query("SELECT * FROM jobs")
  .then(response => {
    res.json({
      message: "Jobs seem to work!",
      jobs: response.rows
    })
  })
});

App.get('/api/messages', (req, res) => {
  const data = db.query("SELECT * FROM messages")
  .then(response => {
    res.json({
      message: "Messages seem to work!",
      messages: response.rows
    })
  })
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
