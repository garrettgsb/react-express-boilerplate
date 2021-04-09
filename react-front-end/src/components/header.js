import React from 'react';
import HoverImage from "react-hover-image";

import './header.scss';

export default function Header () {

return (
    <nav>
      {/* <span>onlymaps</span> */}
      <HoverImage src="./images/logo.png" hoverSrc="./images/logohover.png" className="logo" />
      <div id='userAvatar'>
        <img src= './images/user.png' className="userAvatar"></img>
      </div>
    </nav>

);
}