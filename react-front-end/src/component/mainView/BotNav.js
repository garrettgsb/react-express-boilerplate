import React from 'react';
import '../../sass/botNav.scss';

export default function BotNav(props) {

  return (

    <nav className="gradient-custom-2 bot-nav navbar navbar-expand-lg navbar-dark fixed-bottom">

      <div className="container-fluid">

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-5 mb-lg-0 d-flex justify-content-around">
            <li className="nav-item" onClick={() => props.transition('PROFILE')}>
              <h2 className="nav-link" >Profile</h2>
            </li>
            <li className="nav-item" onClick={() => props.transition('SAVINGS')}>
              <h2 className="nav-link" >Savings</h2>
            </li>
            <li className="nav-item" onClick={() => props.transition('EXPENSES')}>
              <h2 className="nav-link" >Expenses</h2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}