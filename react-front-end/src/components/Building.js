import React, { Component } from "react";
import ReviewsList from "./ReviewsList";
import BuildingAmenities from "./BuildingAmenities";

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
      <div className="building-container">
        <div className="building-header">
          {this.state.buildings.map((building) => (
            <p key={building.id}>
              <h1>{building.name}</h1>
              <p>{building.address}</p>
            </p>
          ))}
        </div>
        <div className="building-details">
          <div className="review-list">
            <ReviewsList />
          </div>
          <div className="amenities-and-map">
            <BuildingAmenities />
          </div>
        </div>
      </div>
    );
  }
}

export default Building;
