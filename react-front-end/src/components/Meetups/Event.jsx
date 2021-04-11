import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Event = ({ event }) => {
  return (
    <div className='event'>
      <h3>
        {event.id} <FaTimes style={{color: 'red', cursor: 'pointer'}}/>
      </h3>
      <p>{event.date}</p>
    </div>
  )
}

export default Event
