import React from 'react'
import Stamp from './Stamp'
import "./TripContainer.scss"

export default function TripContainer ({history}) {

  return (
    <div className='tripContainer'>
      {(history.length > 0) && <Stamp history={history} />}
    </div>
  )
}