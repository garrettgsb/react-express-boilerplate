import React from 'react'
import Event from './Event'

const Events = ({ events, onDelete }) => {
  

  return (
    <>
     {events.map((event) => (
       <Event key={event.id} event={event} onDelete={onDelete} />
     ))} 
    </>
  )
}

export default Events
