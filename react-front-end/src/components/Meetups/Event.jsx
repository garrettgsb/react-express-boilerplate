import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Event = ({ event, onDelete }) => {
  return (
    <div className='event'>
      <h3>
        {event.name} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(event.id)}/>
      </h3>
      <p>{event.date} at {event.time}</p>
    </div>
  )
}

export default Event
