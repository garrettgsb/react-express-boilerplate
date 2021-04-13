const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors')

const http = require("http");
const socketIo = require("socket.io");
// const index = require("./routes/index");

App.use(cors())
// App.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
//   });

  // const app = Express();
// app.use(index);

const server = http.createServer(App);
const io = socketIo(server,
  {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  }
);



io.on('connection', (socket) => {

  console.log('client connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

server.listen(PORT, () => {
  console.log("Listen on port: ", PORT);
})

// App.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
// });
