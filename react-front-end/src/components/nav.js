import React from "react";
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <nav className="nav">
      <img src="logo-placeholder-image.png" />
      <ul className="nav_links">
        <label>
          <Link to="/">Home</Link>
        </label>
        <label>
          <Link to="/canvas">Create New</Link>
        </label>
        <label>
          Logged In As: testName
        </label>
        <label>
          <Link to="/account">Account</Link>
        </label>
      </ul>
      
    </nav>
  )
}