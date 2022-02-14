//declarations
const Express = require('express');
const bodyParser = require('body-parser');
const homepage = require('./db/home_queries.js')

//env variables
const PORT = 8080;

// Express Configuration
const app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static('public'));

// Sample GET route
app.get('/api/data', (req, res) => {
  homepage.searchDestination()
    .then((products) => {
      res.json(products);
      // res.render()
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
