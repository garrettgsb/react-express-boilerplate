import React from 'react';
import '../../sass/topNav.scss'
import { getUserByID } from '../../helpers/helper_functions';

export default function TopNav(props) {
  const username = getUserByID(props.users, props.userId)[0].username;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light top-nav-items">
      <div id='nav-container' className="container-fluid">
        <div className='w-100'>
          <div id="logo">
            <i
              className="logo fa-solid fa-piggy-bank"
              height="15"
              alt="pig logo"
              loading="lazy"
            />
          </div>
        </div>
        <div className='w-100 d-flex justify-content-center'>
          <div id="nav-title">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h4>Piggy Break</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-100 d-flex justify-content-end'>
          <div id='nav-right' className="fw-bold d-flex align-items-center">
            {/* <!-- Avatar --> */}
            <div id='nav-username' className="dropdown d-flex align-items-center">
              Welcome {username}!!
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                className="m-2 rounded-circle"
                height="25"
                alt='animated-girl-with-glasses'
                loading="lazy"
              />
            </div>
            <div id="nav-logout" className='p-2'>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li >
                  <a className="fw-bold logout" href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Right elements --> */}
      </div>
    </nav>
  );
}
