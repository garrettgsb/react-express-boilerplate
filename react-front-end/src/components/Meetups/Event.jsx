import React, { useContext } from 'react'
import { CheckedContext }from './CheckedContext.jsx'
import { MeetupsContext } from './MeetupsContext.jsx'
import { FaTimes } from 'react-icons/fa'

import FormControlLabel from '@material-ui/core/FormControlLabel'

const Event = ({ event, onDelete }) => {
  
<<<<<<< HEAD
  const { checked, setChecked } = useContext(CheckedContext);
  const { meetup, setMeetup } = useContext(MeetupsContext);
  // const checked = true;
=======
  // const { checked, setChecked } = useContext(CheckedContext);
  const { meetup, setMeetup } = useContext(MeetupsContext);

>>>>>>> 90022df6667654362a49c3725bb10fab26e15896
  // const contextCheck = useContext(CheckedContext)

  function setMeetupToEvent() {
    setMeetup(event)
  }

  function handleChange() {
<<<<<<< HEAD
    setChecked((prev) => !prev);
=======
    // setChecked((prev) => !prev);
>>>>>>> 90022df6667654362a49c3725bb10fab26e15896
  }

  return (
    <div className='event'>
      <h3>
<<<<<<< HEAD
        {/* <FormControlLabel 
        // control={<p checked={checked} onChange={handleChange}>{event.name}</p>}
        onClick={() => 
          handlchange();
          setMeetupToEvent();}
          /> */}
          <p onClick={() => {
          handleChange();
          setMeetupToEvent();}}>{event.name}</p>
=======
        <FormControlLabel 
        control={<p checked={''} onChange={handleChange}>{event.name}</p>}
        onClick={() => 
          setMeetupToEvent()}
          />
>>>>>>> 90022df6667654362a49c3725bb10fab26e15896
        <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {onDelete(event.id); setMeetup('');}}/>
      </h3>
      <p>{event.date} at {event.time}</p>
    </div>
  )
}

export default Event
