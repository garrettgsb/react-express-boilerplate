import React from 'react';
import HoverImage from "react-hover-image";


export default function ChooseCountry() {

  return (
    <>
      <div className='choose'>
        Choose a location to see the trends
      </div>
      <div className='chooseCountry'>
        <HoverImage src="./images/canada.png" hoverSrc="./images/canadahover.png" className="canada" />
        <HoverImage src="./images/usa.png" hoverSrc="./images/usahover.png" className="usa" />
      </div>
    </>
  );
}