import React from 'react'
import '../styles/components/_button.scss'


const Button = ({ color, text, onClick }) => {
  return (
    <button
      style={{backgroundColor: color}}
      className='btn'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
