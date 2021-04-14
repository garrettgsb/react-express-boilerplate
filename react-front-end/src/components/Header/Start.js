import React from 'react';
import HoverImage from "react-hover-image";


export default function ChooseCountry(props) {

  return (
    <>
      <div className='choose'>
        Choose a <span className='redText'>&nbsp;location&nbsp;</span> to see <span className='redText'>&nbsp;trends&nbsp;</span>
      </div>
      <div className='chooseCountry'>
        <HoverImage src="./images/canada.png" hoverSrc="./images/canadahover.png" className="canada" onClick={() => {props.onClick('canada')}} />
        <HoverImage src="./images/usa.png" hoverSrc="./images/usahover.png" className="usa" onClick={() => {props.onClick('USA')}} />
      </div>
    </>
  );
}