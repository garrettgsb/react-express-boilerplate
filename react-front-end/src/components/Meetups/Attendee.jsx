import React from 'react'
// import PhotogsProfile from './PhotogsProfile'
import { Link } from 'react-router-dom';


const Attendee = ({ attendee }) => {

  const profileLink = `/photogs/${attendee.id}`
  
  return (
    <div>
      <button><Link to={profileLink}>{attendee.name}</Link></button>
      {/* <button>{attendee.name}</button> */}
    </div>
  )
}

export default Attendee
