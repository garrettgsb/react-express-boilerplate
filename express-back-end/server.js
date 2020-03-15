const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 9001;
require('dotenv').config();

//Database setup
const pg = require('pg');
const db = new pg.Client(process.env.DATABASE_URL);

db.connect();

// Middleware
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));


//Api Routes
const cardsRoutes = require('./routes/cards')
const decksRoutes = require('./routes/decks')
const ratingsRoutes = require('./routes/ratings')
const testquestionsRoutes = require('./routes/testquestions')
const testsRoutes = require('./routes/tests')
const usersRoutes = require('./routes/users')

App.use('/api/cards', cardsRoutes(db));
App.use('/api/decks', decksRoutes(db));
App.use('/api/ratings', ratingsRoutes(db));
App.use('/api/testquestions', testquestionsRoutes(db));
App.use('/api/tests', testsRoutes(db));
App.use('/api/users', usersRoutes(db));

// GET Routes
App.get('/users/:id', (req, res) =>
  res.send('hello1')
);

App.get('/study/:id/original', (req, res) =>
  res.send('hello2')
);

App.get('/study/:id/test', (req, res) =>
  res.send('hello3')
);

App.get('/study/:id/match', (req, res) =>
  res.send('hello4')
);

App.get('/deck/:id', (req, res) =>
  res.send('hello5')
);

App.get('/search/:params', (req, res) =>
  res.send('hello6')
);

App.get('/study/:id', (req, res) =>
  res.send('hello2')
);

App.get('/', (req, res) => 
  res.send('hello')
);


// API Routes
// API/USERS
App.get('/api/users', (req, res) => 
  res.send('hi api/users')
);

App.post('/api/users', (req, res) => 
  res.send('post api/users')
);

// API/DECKS
App.get('/api/decks', (req, res) => 
  res.send('get api/decks')
);

App.post('/api/decks', (req, res) => 
  res.send('post api/decks')
);

App.put('/api/decks', (req, res) => 
  res.send('put api/decks')
);

App.delete('/api/decks', (req, res) => 
  res.send('delete api/decks')
);

// API/CARDS
App.get('/api/cards', (req, res) => 
  res.send('get api/cards')
);

App.post('/api/cards', (req, res) => 
  res.send('post api/cards')
);

App.put('/api/cards', (req, res) => 
  res.send('put api/cards')
);

App.delete('/api/cards', (req, res) => 
  res.send('delete api/cards')
);

// API/TESTS
App.get('/api/tests', (req, res) => 
  res.send('get api/tests')
);

App.post('/api/tests', (req, res) => 
  res.send('post api/tests')
);

App.put('/api/tests', (req, res) => 
  res.send('put api/tests')
);

// LISTENING ON THIS PORT
App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
