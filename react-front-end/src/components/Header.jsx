import React from 'react'
import Button from './Button.jsx'

const Header = () => {

  const onClick = () => {
    console.log('Click')
  }

  return (
    <header>
    <h1>Aurora Junkies Header</h1>
    <Button color='black' text='Add' onClick={onClick} />
    </header>
  )
}

export default Header
