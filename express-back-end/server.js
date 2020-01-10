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



App.use(cors({credentials: true, origin: 'http://localhost:3002'}));
const cities = require('./routes/cities');
const trips = require('./routes/trips');
const user = require('./routes/user');


// Express Configuration
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json())
App.use(Express.static('public'));
App.use(morgan('dev'));
App.use(cookieParser({
  name: 'travelly',
  keys: ['/^ab/W7N*V@-)G>vl."X`!*S43@Rxg0Wcd25?H1{t.z(l']
}))

// Connect all our routes to our application
App.use('/api/itineraries', cities(db));
App.use('/api/trips', trips(db));
App.use('/', user(db));

App.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
