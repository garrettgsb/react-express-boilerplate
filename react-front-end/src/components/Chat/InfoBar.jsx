import React from 'react'

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'


const InfoBar = ({ room }) => {
  return (
    <div className='infobar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={onlineIcon} alt='profile' />
        <h3>{room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'><img src={closeIcon} alt='close' /></a>
      </div>
    </div>
  )
}

export default InfoBar
