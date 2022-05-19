import React from 'react';
import '../../sass/topNav.scss'
import { getUserByID } from '../../helpers/helper_functions';

export default function TopNav(props) {
  const username = getUserByID(props.users, props.userId)[0].username;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <i
            className="logo fa-solid fa-piggy-bank"
            height="15"
            alt="pig logo"
            loading="lazy"
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <h4>Piggy Projections</h4>
            </li>
          </ul>
        </div>
        {/* <!-- Right elements --> */}
        <div className="d-flex align-items-center">
          {/* <!-- Avatar --> */}
          <div className="dropdown">
          Welcome {username}!!
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
              className="rounded-circle"
              height="25"
              alt='animated-girl-with-glasses'
              loading="lazy"
            />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="dropdown-item text-danger" href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
