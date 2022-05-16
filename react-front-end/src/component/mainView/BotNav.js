import React from 'react';
import '../../sass/botNav.scss';

export default function BotNav() {

  return (

    <nav className="gradient-custom-2 bot-nav navbar navbar-expand-lg navbar-dark fixed-bottom">

      <div className="container-fluid">

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-5 mb-lg-0 d-flex justify-content-around">
            <li className="nav-item">
              <h2 className="nav-link" href="/">Profile</h2>
            </li>
            <li className="nav-item">
              <h2 className="nav-link" href="/">Savings</h2>
            </li>
            <li className="nav-item">
              <h2 className="nav-link" href="/">Expenses</h2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}