import React from 'react';
import '../../sass/botNav.scss';
import useVisualMode from '../../hooks/useVisualMode';

export default function BotNav(props) {

  const SAVINGS = 'SAVINGS';
  const VACATION = 'VACATION';
  const {mode} = useVisualMode(VACATION);
  
  return (

    <nav className="gradient-custom-2 bot-nav navbar navbar-expand-lg navbar-dark fixed-bottom">

      <div className="container-fluid">

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-5 mb-lg-0 d-flex justify-content-around">
            <li className="nav-item" onClick={() => props.transition('PROFILE')}>
              <h2 className="nav-link" >Profile</h2>
            </li>
            {mode === SAVINGS && 
            <li className="nav-item" onClick={() => props.transition('SAVINGS')}>
              <h2 className="nav-link" >Savings</h2>
            </li>
            }
            {mode === VACATION && 
            <li 
            className="nav-item" 
            onClick={() => props.transition('VACATION')}>
              <h2 className="nav-link" >Budget</h2>
            </li>
            }
            <li className="nav-item" onClick={() => props.transition('EXPENSES')}>
              <h2 className="nav-link" >Expenses</h2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}