import React from 'react'

function Nav() {
  return (
    <section className="top-nav">
      <div className='site-name'>
        <a href='/'>LEARNAZ</a>

      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' for="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <ul className="menu">
        <li>
          <a href='/about'>About</a>
        </li>
        <li><a href='/sign-up'>Sign Up</a></li>
        <li><a href='/sign-in'>Sign In</a></li>
        <li><a href='/contact-us'>Contact Us</a></li>
      </ul>
    </section>
  )
}

export default Nav