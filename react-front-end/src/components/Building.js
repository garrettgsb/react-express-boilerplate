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
      setBuilding(res.data[0]);
    });
  }, [buildingId]);

  const handleClick = () => {
    history.push("/map");
  };

  return (
    <div className="building-container">
      <div className="building-header">
        <div key={building.id}>
          <h1>{building.name}</h1>
          <h3>{building.neighbourhood} Neighbourhood</h3>
          <p>{building.address}</p>
          <img
            className="building_amenities-image"
            src={building.image_url}
            alt={building.name}
          />
          <FavouriteButton buildingId={building.id} />
        </div>
      </div>
      <div className="building-details">
        <div className="review-list">
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
