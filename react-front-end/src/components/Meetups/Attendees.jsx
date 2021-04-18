import React from 'react'
import Attendee from './Attendee.jsx'

const Attendees = ({ attendees }) => {

  
  const meetups = [
    {
      id: 1,
      location_id: 1,
      name: "Banff",
      date: '2021-04-27',
      time: '22:30:00'
    },
    {
      id: 2,
      location_id: 3,
      name: "Yellowknife",
      date: '2021-05-21',
      time: '22:00:00'
    },
    {
      id: 3,
      location_id: 2,
      name: "Jasper",
      date: '2021-04-15',
      time:'01:20:00'
    }
  ]
  const meetups_photographers = [
    {
      id: 1,
      meetup_id: 1,
      photographer_id: 2
    },
    {
      id: 2,
      meetup_id: 1,
      photographer_id: 3
    },
    {
      id: 3,
      meetup_id: 1,
      photographer_id: 1
    },
    {
      id: 4,
      meetup_id: 2,
      photographer_id: 1
    },
    {
      id: 5,
      meetup_id: 2,
      photographer_id: 2
    }
  ]
  
  return (
    <div className='attendees'>
      {attendees.map((attendee) => (
       <Attendee key={attendee.id} attendee={attendee} />
      ))}
    </div>
  )
}

export default Attendees
