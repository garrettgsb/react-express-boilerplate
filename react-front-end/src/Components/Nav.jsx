import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";


function Nav() {
  return (
    <section className="top-nav">
      <div className='site-name'>
        <Link to='/'>LEARNAZ</Link>
      </div>
      <Dropdown className='dropdown1'>
        <Dropdown.Toggle id="dropdown-basic">
          Welcome
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/sign-in">Sign In</Dropdown.Item>
          <Dropdown.Item href="/sign-up">Sign up</Dropdown.Item>
          {/* <Dropdown.Item href="/create-course">Admin</Dropdown.Item> */}
          <Link to='/create-course'>Admin</Link>
          <Dropdown.Item href="/contact-us">Contact us</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  )
}

export default Nav