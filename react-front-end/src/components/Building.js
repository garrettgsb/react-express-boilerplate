import React, { Component } from "react";
import ReviewsList from "./ReviewsList";

//component to render a building
class Building extends Component {
  state = { buildings: [] };

  componentDidMount() {
    fetch("/api/buildings/:id")
      .then((res) => res.json())
      .then((buildings) => this.setState({ buildings }));
  }

  render() {
    return (
      <div className="Building">
        <ul>
          {this.state.buildings.map((building) => (
            <li key={building.id}>
              <h1>{building.name}</h1>
              <p>{building.address}</p>
            </li>
          ))}
        </ul>
        <ReviewsList />
      </div>
    );
  }
}

export default Building;
