import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import Input from './Input'
import InfoBar from './InfoBar'
import Messages from './Messages'
import TextContainer from './TextContainer'

import './Chat.scss'

let socket;
const ENDPOINT = 'http://localhost:5000'

const Chatbox = () => {
  const [ name, setName ] = useState('')
  const [ room, setRoom ] = useState('')
  const [ message, setMessage ] = useState([])
  const [ messages, setMessages ] = useState([])
  const [ users, setUsers ] = useState('')



  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search)

    socket = io(ENDPOINT , {transports: ['websocket', 'polling', 'flashsocket']});

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, () => {

    });


    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [ ENDPOINT, window.location.search ])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    })
  }, [messages])

  const sendMessage = e => {
    e.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages);

  return (
    <div className='outerContainer'>
      <div className='innerContainer'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>

  )
}

export default Chatbox

{/* useEffect(() => {

    socket.on('message', message => {

      setMessages([...messages, message])

    })

    return () => {

      socket.off()

    }

  }, [messages]) */}

{/* <div>
<form onSubmit={onMessageSubmit}>
 <h1>Messenger</h1>
  <div>
    <TextField 
      name="name" 
      onChange={e => onTextChange(e)} 
      value={state.name} 
      label="Name" 
     />
  </div>
  <div>
    <TextField 
      name="message" 
      onChange={e => onTextChange(e)} 
      value={state.message} 
      variant="outlined" 
      label="Message" 
     />
  </div>
  <button>Send Message</button>
 </form> 
 <div className="render-chat">
   <h1>Chat Log</h1>
   {renderChat()}
 </div>
</div> */}