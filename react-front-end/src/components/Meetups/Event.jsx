import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { MeetupsContext } from './MeetupsContext.jsx'

const Event = ({ event, onDelete }) => {
  const { meetup, setMeetup } = useContext(MeetupsContext);


  function setMeetupToEvent() {
    setMeetup(event)
  }

  function revealMeetupPanel() {
    console.log("revealed!", event)
  }

  return (
    <div className='event'>
      <h3>
        <p onClick={() => {
          setMeetupToEvent();
          revealMeetupPanel();
        }}>
          {event.name}
        </p> 
        <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {onDelete(event.id); setMeetup('');}}/>
      </h3>
      <p>{event.date} at {event.time}</p>
    </div>
  )
}

export default Event
