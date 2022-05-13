import '../../sass/topNav.scss'
import React from 'react';

export default function TopNav() {

  return (
    <nav id='topNav'>
      <div>
        <i className="logo fa-solid fa-piggy-bank"></i>
      </div>
      <div>
        <h1>
          TopNav
        </h1>
      </div>
      <div>
        <div>
          username
        </div>
        <div id='avatar'>
          avatar
        </div>
      </div>
    </nav>
  );
}
