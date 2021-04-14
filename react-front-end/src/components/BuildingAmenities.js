import React, { Component } from "react";

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
        <ul>
          {this.state.buildingAmenities.map((amenity) => (
            <li key={amenity.id}>
              <h1>{amenity.name}</h1>
              <img
                className="building_amenities-image"
                src={amenity.image_url}
                alt={amenity.name}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BuildingAmenities;
