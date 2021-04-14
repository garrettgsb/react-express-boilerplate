import React, { useContext } from 'react'
import { CheckedContext }from './CheckedContext.jsx'
import { MeetupsContext } from './MeetupsContext.jsx'
import { FaTimes } from 'react-icons/fa'
import { MeetupsContext } from './MeetupsContext.jsx'
import { FaTimes } from 'react-icons/fa'

import FormControlLabel from '@material-ui/core/FormControlLabel'

import FormControlLabel from '@material-ui/core/FormControlLabel'

const Event = ({ event, onDelete }) => {
  
  const { checked, setChecked } = useContext(CheckedContext);
  const { meetup, setMeetup } = useContext(MeetupsContext);
  // const checked = true;
  // const contextCheck = useContext(CheckedContext)

  function setMeetupToEvent() {
    setMeetup(event)
  }

  function handleChange() {
    setChecked((prev) => !prev);
  }

  return (
    <div className='event'>
      <h3>
          <p onClick={() => {
          handleChange();
          setMeetupToEvent();}}>{event.name}</p>
        <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {onDelete(event.id); setMeetup('');}}/>
      </h3>
      <p>{event.date} at {event.time}</p>
    </div>
  )
}

export default Event
