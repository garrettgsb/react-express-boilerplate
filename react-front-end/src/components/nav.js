import React from "react";
import '../pages/styles/nav.css'
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <nav className="nav">
      <img src="curtaindrawlogo.png" className="mainlogo"/>
      <div className="nav_links">
        <div className="nav_btns">
          <Link to="/" className="nav_home" style={{color: 'rgb(50,50,50)', textDecoration: 'none' }}>Home</Link>
          <Link to="/canvas" className="nav_new" style={{color: 'rgb(50,50,50)', textDecoration: 'none' }}>Create New</Link>
        </div>
        <div className="nav_user">
          <label className="nav_loggedin">
            Logged in as: testName
          </label>
          <Link to="/account" className="nav_acc">
            <img src="user_placeholder.png"></img>
          </Link>
        </div>
      </div>
    </nav>
  )
}