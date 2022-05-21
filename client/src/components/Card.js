import React from "react";
import ReactCardFlip from "react-card-flip";
import Venue from "./Venue";
import VenueBack from "./VenueBack";
import "./Card.scss";

export default function CardFlip({isFlipped, bar}) {

   
  return (
      <div className="card">
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"

        >
          {/* <YOUR_FRONT_CCOMPONENT> */}
          {/* This is the front of the card. */}
          <VenueBack>Click to flip</VenueBack>
          {/* </YOUR_FRONT_CCOMPONENT> */}

          {/* <YOUR_BACK_COMPONENT> */}
          {/* This is the back of the card. */}
          {(bar && Object.keys(bar).length > 0)&&<Venue  bar={bar}>Click to flip</Venue>}
          {/* </YOUR_BACK_COMPONENT> */}
        </ReactCardFlip>
      </div>
    );

}

export { CardFlip };
