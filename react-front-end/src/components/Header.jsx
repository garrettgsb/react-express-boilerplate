import React from 'react'
import Button from './Button.jsx'


const Header = () => {

  const onClick = () => {
    console.log('Click')
  }

  return (

    <header className='header'>
    <h1>Create Meetup</h1>
    <Button className='btn' color='black' text='Add' onClick={onClick} />
    </header>
  )
}

export default Header
