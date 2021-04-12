import React, { Component } from "react";

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
        <h1>Building</h1>
        <ul>
          {this.state.buildings.map((building) => (
            <li key={building.id}>
              <h2>{building.name}</h2>
              <p>{building.address}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Building;
