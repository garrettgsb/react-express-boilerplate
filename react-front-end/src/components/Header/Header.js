import React from 'react';
import HoverImage from "react-hover-image";

import './Header.scss';
import ChooseCountry from './Start';
import TrendingHash from './TrendingHash';


export default function Header() {

  return (
    <nav>
      <div className='headerParent'>
        <HoverImage src="./images/logo.png" hoverSrc="./images/logohover.png" className="logo" />
        <img src='./images/user.png' alt='' className="userAvatar"></img>
      </div>
      {/* <ChooseCountry />
      <TrendingHash /> */}
    </nav>

  );
}