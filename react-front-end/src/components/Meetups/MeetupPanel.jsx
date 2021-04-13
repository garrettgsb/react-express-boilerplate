import React, { useContext, useState } from 'react'
import { MeetupsContext } from './MeetupsContext.jsx'
import { CheckedContext }from './CheckedContext.jsx'
import Attendees from './Attendees.jsx'
import Fade from '@material-ui/core/Fade'

const MeetupPanel = () => {
<<<<<<< HEAD
  const contextCheck = useContext(CheckedContext)
=======
  // const contextCheck = useContext(CheckedContext)
>>>>>>> 90022df6667654362a49c3725bb10fab26e15896
  const context = useContext(MeetupsContext)

  const [attendees, setAttendees] = useState([
    {
      id: 1,
      name: "Alice Anderson"
    },
    {
      id: 2,
      name: "Betty Boop"
    },
    {
      id: 3,
      name: "Charlie Chapman"
    },
  ])

  return (
    <>
<<<<<<< HEAD
      <Fade in={contextCheck.checked}>
=======
      {/* <Fade in={''}> */}
>>>>>>> 90022df6667654362a49c3725bb10fab26e15896
        <div className='container'>
          <div><h1>{context.meetup.name}</h1></div>
          <div> 
            <p>{context.meetup.date}</p>
            <p>{context.meetup.time}</p>
          </div>
          <h3>Attendees</h3>
          {attendees.length > 0 ? <Attendees attendees={attendees} /> : 'No Attendees to this meetup.'}
        </div>
<<<<<<< HEAD
      </Fade>
=======
      {/* </Fade> */}
>>>>>>> 90022df6667654362a49c3725bb10fab26e15896
    </>
  )
}

export default MeetupPanel
