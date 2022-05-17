const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8081;
const sassMiddleware = require('./lib/sass-middleware');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const { Pool } = require('pg');
require('dotenv').config();
const dbParams = require("./lib/db");
const db = new Pool(dbParams);
const server = http.createServer(App);
const io = socketio(server);
db.connect();

const users = require('./src/routes/users');
const expenses = require('./src/routes/expenses');
const goals = require('./src/routes/goals');
const categories = require('./src/routes/categories');

io.on("connection", socket => {
  console.log('Socket connected.')
  socket.onmessage = event => {
    console.log(`Message Received: ${event.data}`);

    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});

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

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
