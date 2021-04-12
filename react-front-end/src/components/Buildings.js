import React, { Component } from "react";

//component to render all buildings in an area
class Buildings extends Component {
  state = { buildings: [] };

  componentDidMount() {
    fetch("/api/buildings")
      .then((res) => res.json())
      .then((buildings) => this.setState({ buildings }));
  }

  render() {
    return (
      <div className="Buildings">
        <h1>Buildings</h1>
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

export default Buildings;
