import React from 'react';
import HoverImage from "react-hover-image";

import './Header.scss';

const trendingHashtags= ['#joshua', '#isamu', '#sori', '#freebritney', '#awesomeweatherthisweek', 'smd']

export default function Header() {

  return (
    <nav>
      <div className='headerParent'>
        <HoverImage src="./images/logo.png" hoverSrc="./images/logohover.png" className="logo" />
        <img src='./images/user.png' alt='' className="userAvatar"></img>
      </div>
        <div className='chooseCountry'>
          <HoverImage src="./images/canada.png" hoverSrc="./images/canadahover.png" className="canada" />
          <HoverImage src="./images/usa.png" hoverSrc="./images/usahover.png" className="usa" />
        </div>
    </nav>

  );
}