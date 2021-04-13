import React, { useContext } from 'react'
import { MeetupsContext } from './MeetupsContext.jsx'

const MeetupPanel = () => {

  const context = useContext(MeetupsContext)

  return (
    <div className='container'>
      <div><h1>{context.meetup.name}</h1></div>
        
       <div> <p>{context.meetup.date}</p>
        <p>{context.meetup.time}</p>
      </div>
    </div>
  )
}

export default MeetupPanel
