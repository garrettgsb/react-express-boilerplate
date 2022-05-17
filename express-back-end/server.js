const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8081;
const sassMiddleware = require('./lib/sass-middleware');
const cors = require('cors');

const { Pool } = require('pg');
require('dotenv').config();
const dbParams = require("./lib/db");
const db = new Pool(dbParams);
db.connect();

const users = require('./src/routes/users');
const expenses = require('./src/routes/expenses');
const goals = require('./src/routes/goals');
const categories = require('./src/routes/categories');
const incomes = require('./src/routes/incomes');

App.use(cors());
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

App.use('/api', users(db));
App.use('/api', expenses(db));
App.use('/api', goals(db));
App.use('/api', categories(db));
App.use('/api', incomes(db));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
