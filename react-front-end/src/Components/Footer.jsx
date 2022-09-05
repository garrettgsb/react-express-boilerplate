import React from 'react'
import '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <a href='/'>LEARNAZ</a>
      </div>
      <ul className='social-media'>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-instagram"></i>
      </ul>
    </nav>
  );
}

export default Footer