import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

//component to render favourites
const BuildingsByRating = () => {
  const [building, setBuilding] = useState([]);

  const { buildingId } = useParams();

  const history = useHistory();

  const buildingRating = 5;

  useEffect(() => {
    axios.get(`/api/buildings/ratings/${buildingRating}`).then((res) => {
      setBuilding(res.data);
    });
  }, [buildingId]);

  const handleClick = (buildingId) => {
    history.push(`/buildings/${buildingId}`);
  };

  return (
    <div className="favourites-container">
      <h1>Top Rated Properties</h1>
      <div className="favourites-header">
        {building.map((property) => (
          <div key={property.id}>
            <h2>{property.name}</h2>
            <p>{property.neighbourhood} Neighbourhood</p>
            <p>{property.address}</p>
            <img
              className="building_amenities-image"
              src={property.image_url}
              alt={property.name}
            />
            <div>
              <button onClick={() => handleClick(property.id)}>
                Property Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingsByRating;
