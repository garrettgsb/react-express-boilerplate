import React from 'react'
import Event from './Event'

const Events = ({ events }) => {
  

  return (
    <>
     {events.map((event) => (
       <Event key={event.id} event={event}/>
     ))} 
    </>
  )
}

export default Events
