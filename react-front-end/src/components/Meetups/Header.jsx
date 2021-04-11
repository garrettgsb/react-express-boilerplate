import React from 'react'
import Button from '../Button.jsx'


const Header = ({ onAdd, showAddEvent }) => {

  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
    <h1>Meetups</h1>
    <Button 
      className='btn' 
      color={showAddEvent ? 'red' : 'green'}
      text={showAddEvent ? 'Close' : 'Add'} 
      onClick={onAdd} />
    </header>
  )
}

export default Header
