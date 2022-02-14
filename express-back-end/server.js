const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

const main = async() => {
  const pool = require('knex')(require('./knexfile').development);
  await pool.migrate.latest();
  
  // Express Configuration
  App.use(BodyParser.urlencoded({ extended: false }));
  App.use(BodyParser.json());
  App.use(Express.static('public'));
  

  // Sample GET route
  App.get('/api/data', (req, res) => res.json({
    message: "Seems to work!",
  }));

  App.get('/dashboard', (req, res) => res.json({
    message: "Hit the dashboard!",
  }));
  
  App.listen(PORT, () => {
    // eslint-disable-next-line no-console
  
    console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
  });
};

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })