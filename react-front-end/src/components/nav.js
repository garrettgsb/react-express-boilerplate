import React from "react";
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <nav className="nav">
      <img src="logo-placeholder-image.png" />
      <div className="nav_links">
        <div className="nav_btns">
          <label className="nav_home">
            <Link to="/" style={{color: 'rgb(180,180,180)', textDecoration: 'none' }}>Home</Link>
          </label>
          <label className="nav_new">
            <Link to="/canvas" style={{color: 'rgb(180,180,180)', textDecoration: 'none' }}>Create New</Link>
          </label>
        </div>
        <div className="user_nav">
          <img src="user_placeholder.png" />
          <label className="nav_loggedin">
            Logged in as: testName
          </label>
          <label className="nav_acc">
            <Link to="/account" style={{color: 'rgb(180,180,180)', textDecoration: 'none' }}>Account</Link>
          </label>
        </div>
      </div>
    </nav>
  )
}