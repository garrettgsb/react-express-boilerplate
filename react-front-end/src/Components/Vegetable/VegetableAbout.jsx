import React from 'react';
import './VegetableAbout.scss';
import useAppData from "../../Hooks/useAppData";

export default function VegetableAbout() {
  const { state } = useAppData();

  return (
    <div className="content">
      {state.vegetables.map(veg => (
        <div className="mainCard">
          <div className="flipCard">
            <div className="flipCardInner">
              <div className="flipCardFront">
                <img src={veg.image_url} alt={'image'} >
                </img>
              </div>
              <div className="flipCardBack">
                <h1>{veg.name}</h1>
                <p>{veg.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}