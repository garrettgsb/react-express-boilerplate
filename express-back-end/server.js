const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors')

const http = require("http");
const socketIo = require("socket.io");
// const index = require("./routes/index");

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static('public'));
app.use(cors())


const server = http.createServer(app);
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

// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

server.listen(PORT, () => {
  console.log("Listen on port: ", PORT);
})

