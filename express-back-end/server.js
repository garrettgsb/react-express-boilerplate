const Express = require('express');
const App = Express();
const routes = require('./routes');
const BodyParser = require('body-parser');
const knex = require('./db/index.js');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

App.use('/api', routes);

// Sample GET route
App.get('/', (req, res) => {
  knex.raw("SELECT 1").then(() => {
    console.log("PostgreSQL connected");
  })
});
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
