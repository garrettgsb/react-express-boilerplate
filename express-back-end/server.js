const Express = require('express');
const App = Express();
const routes = require('./routes');
const BodyParser = require('body-parser');
const knex = require('./db/index.js');
const PORT = 8080;
const morgan = require('morgan');
const axios = require('axios');
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

App.use('/api', routes);
App.use(morgan('dev'));

// Sample GET route
App.get('/', (req, res) => {
  knex.raw("SELECT 1").then(() => {
    console.log("PostgreSQL connected");
  })
});


App.get('/api/test', (req, res) => {
  console.log("test test test")
  console.log(req.query)
  const answer = "finally"
  res.json({
    message: `${answer}`,
  })
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
