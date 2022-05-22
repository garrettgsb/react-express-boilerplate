import React from 'react';
import '../../sass/botNav.scss';

export default function BotNav(props) {

  const changeTab = (tab) => {
    props.changeTab(tab)
  }

  return (

    <nav className="gradient-custom-2 bot-nav navbar navbar-expand-lg navbar-dark fixed-bottom">

      <div className="container-fluid">

        <div className="navbar-collapse row d-flex justify-content-around" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-5 mb-lg-0 d-flex justify-content-around">
            <li className="h-100 w-100 nav-item nav-button" onClick={() => changeTab('PROFILE')}>
              <h2 className="nav-link" >Profile</h2>
            </li>
            {!props.vacationMode &&
              <li className="h-100 w-100 nav-item nav-button" onClick={() => changeTab('SAVINGS')}>
                <h2 className="nav-link" >Savings</h2>
              </li>
            }
            {props.vacationMode &&
              <li
                className="h-100 w-100 nav-item nav-button"
                onClick={() => changeTab('VACATION')}>
                <h2 className="nav-link" >Budget</h2>
              </li>
            }
            <li className="h-100 w-100 nav-item nav-button" onClick={() => changeTab('EXPENSES')}>
              <h2 className="nav-link" >Expenses</h2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}