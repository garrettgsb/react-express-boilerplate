import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ChatJoin = () => {
  const [ name, setName ] = useState('')
  const [ room, setRoom ] = useState('')


  return (
    <div>
      <h1>Join</h1>
        <div><input placeholder="name" type="text" onChange={e => setName(e.target.value)} /></div>
        <div><input placeholder="room" className='mt-20' type="text" onChange={e => setRoom(e.target.value)} /></div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null } to={`/meetups?name=${name}&room=${room}`}>
          <button type='submit' className='mt-20'>Sign In</button>
        </Link>
    </div>
  )
}

export default ChatJoin
