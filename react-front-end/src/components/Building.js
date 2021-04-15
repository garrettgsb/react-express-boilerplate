import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import ReviewsList from "./ReviewsList";
import BuildingAmenities from "./BuildingAmenities";
import FavouriteButton from "./Favourites/FavouriteButton";
import AmenMap from "./AmenMap";

//component to render a building
const Building = () => {
  const [building, setBuilding] = useState([]);

  const { buildingId } = useParams();

  const history = useHistory();

  useEffect(() => {
    axios.get(`/api/buildings/${buildingId}`).then((res) => {
      setBuilding(res.data);
    });
  }, [buildingId]);

  const handleClick = () => {
    history.push("/map");
  };

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
          <button onClick={handleClick}>Go to the Map page</button>
        </div>
        <div className="amenities-map">
          <BuildingAmenities />
          <AmenMap />
        </div>
      </div>
    </div>
  );
};

export default Building;
