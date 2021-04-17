import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

//component to render favourites
const Features = () => {
  const [feature, setFeature] = useState([]);

  const { buildingId } = useParams();

  const history = useHistory();

  const buildingRating = 5;

  useEffect(() => {
    axios.get(`/api/buildings/ratings/${buildingRating}`).then((res) => {
      console.log("123123123123123123");
      setFeature(res.data);
    });
  }, [buildingId]);

  const handleClick = (buildingId) => {
    history.push(`/buildings/${buildingId}`);
  };

  return (
    <div className="favourites-container">
      <h1>Top Rated Properties</h1>
      <div className="favourites-header">
        {feature.map((property) => (
          <div key={property.id}>
            <h2>{property.name}</h2>
            <p>{property.address}</p>
            <p>{property.neighbourhood}</p>
            <img
              className="building_amenities-image"
              src={property.image_url}
              alt={property.name}
            />
            <div>
              <button onClick={() => handleClick(property.building_id)}>
                Building Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
