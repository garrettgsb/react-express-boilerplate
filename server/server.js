//declarations
const Express = require('express');
const bodyParser = require('body-parser');
const homepage = require('./db/home_queries.js')
const favourites = require('./db/favourites_queries')
const reservations = require('./db/reservations_queries')
const adventureDetails = require('./db/adventure_details_queries')
const reviews = require('./db/reviews_queries')

//env variables
const PORT = 8080;

// Express Configuration
const app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static('public'));

// Sample GET route
app.get('/api/data', (req, res) => {
  reviews.getMyReviews()
    .then((products) => {
      res.json(products);
      // res.render()
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
