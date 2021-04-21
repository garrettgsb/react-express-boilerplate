import React from 'react'

const Attendee = ({ attendee }) => {
  return (
    <div>
      <button>{attendee.name}</button>
    </div>
  )
}

export default Attendee
