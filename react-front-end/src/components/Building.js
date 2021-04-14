import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewsList from "./ReviewsList";
import BuildingAmenities from "./BuildingAmenities";
import FavouriteButton from "./Favourites/FavouriteButton";

//component to render a building
const Building = () => {
  const [building, setBuilding] = useState([]);
  // state = { buildings: [] };

  // componentDidMount() {
  //   fetch("/api/buildings/:id")
  //     .then((res) => res.json())
  //     .then((buildings) => this.setState({ buildings }));
  // }

  const { buildingId } = useParams();

  useEffect(() => {
    axios.get(`/api/buildings/${buildingId}`).then((res) => {
      setBuilding(res.data);
    });
  }, [buildingId]);

  return (
    <div className="building-container">
      <div className="building-header">
        {building.map((property) => (
          <div key={property.id}>
            <h1>{property.name}</h1>
            <p>{property.address}</p>
            <img
              className="building_amenities-image"
              src={property.image_url}
              alt={property.name}
            />
          </div>
        ))}
      </div>
      <div className="building-details">
        <div className="review-list">
          <FavouriteButton />
          <ReviewsList />
        </div>
        <div className="amenities-and-map">
          <BuildingAmenities />
        </div>
      </div>
    </div>
  );
};

export default Building;
