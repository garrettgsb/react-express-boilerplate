import React from 'react'
// import PhotogsProfile from './PhotogsProfile'
import { Link } from 'react-router-dom';

const Attendee = ({ attendee }) => {

  const profileLink = `/photogs/${attendee.id}`
  
  return (
    <div>
      <button className='btn' style={{ backgroundColor: 'rgb(55, 139, 55)' }}><Link to={profileLink} style={{ textDecoration: 'none', color: 'white' }}>{attendee.name}</Link></button>
      {/* <button>{attendee.name}</button> */}
    </div>
  )
}

export default Attendee
