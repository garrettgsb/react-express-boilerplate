const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

const { addUser, removeUser, getUser, getUsersInRoom } = require('./chat-users')

const PORT = process.env.PORT || 5000

const router = require('./chat-router')

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.use(cors())

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {

    const { error, user } = addUser({ id: socket.id, name, room })

    if(error) return callback(error);

    socket.emit('message', { user: 'Aurora Bot', text: `${user.name} welcome to the ${room} chat` })

    socket.broadcast.to(user.room).emit('message', { user: 'Aurora Bot', text: `${user.name} has joined!` })
    
    socket.join(user.room);

    io.to(user.room).emit('roomData', { room: user.room , users: getUsersInRoom(user.room)})

    callback();
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)
    console.log('sendmessage', socket.id, 'user', user)

    io.emit('message', { user: user.name, text: message })



    callback();
  })
  socket.on('disconnection', () => {
    const user = removeUser(socket.id)

    if(user){
      io.emit('message', { user: 'Aurora Bot', text: `${user.name} has left the room`})
      io.emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})
    }
  })
})

app.use(router)

server.listen(PORT, () => console.log(`Chat running on port ${PORT}`))