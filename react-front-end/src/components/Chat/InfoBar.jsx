import React from 'react'

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'


const InfoBar = ({ room }) => {
  return (
    <div className='infobar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={onlineIcon} alt='profile' />
        <h4>{room}</h4>
      </div>
    </div>
  )
}

export default InfoBar
