import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/home" className="btn btn-light">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="btn btn-light">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <a href="/login" className="btn btn-light">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="btn btn-light">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
