import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Nav() {
  return (
    <section className="top-nav">
      <div className='site-name'>
        <a href='/'>LEARNAZ</a>

      </div>
      {/* <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' for="menu-toggle">
        <div className='menu-button'></div>
      </label> */}

      <Dropdown className='dropdown1'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/sign-in">Sign In</Dropdown.Item>
          <Dropdown.Item href="/admin">Admin</Dropdown.Item>
          <Dropdown.Item href="/sign-up">Sign up</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* <ul className="menu">
        <li>
          <a href='/about'>About</a>
        </li>
        <li><a href='/sign-up'>Sign Up</a></li>
        <li><a href='/sign-in'>Sign In</a></li>
        <li><a href='/contact-us'>Contact Us</a></li>
      </ul> */}
    </section>
  )
}

export default Nav