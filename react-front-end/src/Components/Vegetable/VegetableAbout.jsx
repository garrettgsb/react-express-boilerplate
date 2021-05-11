import React from 'react';
import './VegetableAbout.scss';

export default function VegetableAbout() {

  return (
    <div className="mainCard">
      <div className="flipCard">
        <div className="flipCardInner">
          <div className="flipCardFront">
            <img src={'images/vegetables/basil.png'} alt={'image'} style={{ width: '300px' }, { height: '200px' }}>
            </img>
          </div>
          <div className="flipCardBack">
            <h2>Basil</h2>
            <p>Grow me!</p>
          </div>
        </div>
      </div>
    </div>
  )
}