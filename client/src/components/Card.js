import React from "react";
import ReactCardFlip from "react-card-flip";
import Venue from "./Venue";
import VenueBack from "./VenueBack";
import "./Card.scss";

class CardFlip extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="card">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          {/* <YOUR_FRONT_CCOMPONENT> */}
          {/* This is the front of the card. */}
          <VenueBack>Click to flip</VenueBack>
          {/* </YOUR_FRONT_CCOMPONENT> */}

          {/* <YOUR_BACK_COMPONENT> */}
          {/* This is the back of the card. */}
          <Venue bar={this.props.bar}>Click to flip</Venue>
          {/* </YOUR_BACK_COMPONENT> */}
        </ReactCardFlip>
        <button className="card--button" onClick={this.handleClick}>
          FLIP
        </button>
      </div>
    );
  }
}

export { CardFlip };
