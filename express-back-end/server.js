// ENV data
require('dotenv').config();

//Web Server
const PORT = process.env.PORT || 8081;
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const cookieParser = require('cookie-session');
const morgan = require('morgan');
const db = require('./db/connect')
const cors = require('cors')

const trips = require('./routes/trips')
const cities = require('./routes/cities');


App.use(cors());

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));
App.use(morgan('dev'));
App.use(cookieParser({
  name: 'travelly',
  keys: ['/^ab/W7N*V@-)G>vl."X`!*S43@Rxg0Wcd25?H1{t.z(l']
}))

// Connect all our routes to our application
App.use('/', trips(db));
App.use('/', cities(db));

App.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
