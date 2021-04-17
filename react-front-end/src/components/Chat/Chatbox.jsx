import React, { useState, useEffect, useContext } from 'react'
import io from 'socket.io-client'

import Input from './Input'
import InfoBar from './InfoBar'
import Messages from './Messages'
import TextContainer from './TextContainer'
import { authContext } from '../../AuthProvider'
import { MeetupsContext } from '../Meetups/MeetupsContext'

import './Chat.scss'

let socket;

const ENDPOINT = 'http://localhost:5000'

const Chatbox = () => {
  const [ name, setName ] = useState('')
  const [ room, setRoom ] = useState('')
  const [ message, setMessage ] = useState([])
  const [ messages, setMessages ] = useState([])
  const [ users, setUsers ] = useState('')

  const { user } = useContext(authContext);
  const { meetup } = useContext(MeetupsContext)

  useEffect(() => {

    socket = io(ENDPOINT);
    console.log('inside socket', user.name, 'meetup name', meetup.name)

    setName(user.name)
    setRoom(meetup.name)
    socket.emit('join', { name, room }, () => {
      console.log('user', name, 'room', room)
    });


    return () => {
      socket.emit('disconnection');

      socket.off();
    }
  }, [ ENDPOINT ])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    })
  }, [ messages ])

  const sendMessage = e => {
    e.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (<>{user  ?  (<>
    <div className='outerContainer'>
      <div className='innerContainer'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
    </>) : (<><p>Hello</p></>)}</>)
  
}

export default Chatbox