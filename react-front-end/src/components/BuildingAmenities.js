import React, { Component } from "react";
import "./App.css";

//component to render amenities for a building
class BuildingAmenities extends Component {
  state = { buildingAmenities: [] };

  componentDidMount() {
    fetch("/api/:id/building_amenities")
      .then((res) => res.json())
      .then((buildingAmenities) => this.setState({ buildingAmenities }));
  }

  render() {
    return (
      <div className="BuildingAmenities">
        <h2>Amenities</h2>
        <div className="amenities-box">
          {this.state.buildingAmenities.map((amenity) => (
            <div key={amenity.id}>
              <h4>{amenity.name}</h4>
              <img
                className="building_amenities-image"
                src={amenity.image_url}
                alt={amenity.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BuildingAmenities;
