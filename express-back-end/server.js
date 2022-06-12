const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;
const axios = require('axios')
const { getToken, getPlaylist } = require('./helpers/spotify')
const ikea = require('ikea-name-generator');
require('dotenv').config()

// socket IO
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

// Express Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

let token = ''
getToken().then((res) => token = res.data.access_token)

// sample GET route
app.get('/api/data', (req, res) => {
  getPlaylist(token)
    .then(result => res.json({ tracks: result.data.tracks }))
})

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});


let users = [];

//Socket listeners
io.on('connection', socket => {
  const user = socket.handshake.query.username;
  const roomId = socket.handshake.query.roomId;
  console.log("User has connected ", user )
  users.push(user)
  console.log("users: ", users)
  socket.join(roomId);

  socket.on('Guess', guess => {
    socket.to(roomId).emit('chat-messages', `${user}: ${guess}`)
  })

});  


