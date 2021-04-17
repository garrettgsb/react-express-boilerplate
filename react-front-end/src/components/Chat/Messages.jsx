import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import Message from './Message'

import './Chat.scss'

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className='messages'>
      {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    </ScrollToBottom>
  )
}

export default Messages
