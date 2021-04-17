const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase()
  room = room.trim().toLowerCase()

  const existingUser = users.find(user => user.room === room && user.name === name)

  if(!name || !room) return { error: 'Username and Room are required.' }
  if(existingUser) return { error: 'Username is taken' } 

  const user = { id, name, room }

  users.push(user);

  return { user }

}

const removeUser = (id) => {
  const index = users.findIndex(user => { user.id === id })

  if(index != -1) {
    splicedUser = users.splice(index, 1)[0];
    return splicedUser;
  }
}

const getUser = (id) => {
  console.log('users', users)
  const foundUser = users.find((user) => user.id === id)
  console.log('foundUser', foundUser)
  return foundUser;
}

const getUsersInRoom = (room) => {
  const filteredUser = users.filter((user) => user.room === room)
  return filteredUser;
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom }