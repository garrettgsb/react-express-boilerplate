const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const db = require('./lib/db')
const router = Express.Router();


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

//require routes
const usersRouter = require('../express-back-end/routes/usersRouter');
const favouritesRouter = require('../express-back-end/routes/favouritesRouter');
const postsRouter = require('../express-back-end/routes/postsRouter');
const resourcesRouter = require('../express-back-end/routes/resourcesRouter');

//app.use
App.use('/api/users', usersRouter)
App.use('/api/favourites', favouritesRouter)
App.use('/api/posts', postsRouter)
App.use('/api/resources', resourcesRouter)

// Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));

App.get('/api/data', (req, res) => {
  const queryString = `SELECT * FROM users;`
  return db.query(queryString)
  .then(data => {
    res.json(data.rows);
  })
  .catch(err => {
    console.log(err, 'What the actual fuck');
  })
});


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
