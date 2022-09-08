import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Nav() {
  return (
    <section className="top-nav">
      <div className='site-name'>
        <a href='/'>LEARNAZ</a>
      </div>
      <Dropdown className='dropdown1'>
        <Dropdown.Toggle id="dropdown-basic">
          Welcome
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/sign-in">Sign In</Dropdown.Item>
          <Dropdown.Item href="/sign-up">Sign up</Dropdown.Item>
          <Dropdown.Item href="/create-course">Admin</Dropdown.Item>
          <Dropdown.Item href="/contact-us">Contact us</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  )
}

export default Nav