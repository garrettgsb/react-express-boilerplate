import React from 'react'
// import PhotogsProfile from './PhotogsProfile'
import { Link } from 'react-router-dom';


const Attendee = ({ attendee }) => {

  const profileLink = `/photogs/${attendee.id}`
  
  return (
    <div>
      <li><Link to={profileLink}>{attendee.name}</Link></li>
    </div>
  )
}

export default Attendee
