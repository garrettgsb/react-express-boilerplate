import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

//component to render all buildings
const AreaBuildings = () => {
  const [area, setArea] = useState([]);

  const { areaName } = useParams();

  const history = useHistory();

  useEffect(() => {
    axios.get("/api/area/areaName").then((res) => {
      setArea(res.data);
    });
  }, [areaName]);

  const handleClick = (buildingId) => {
    history.push(`/buildings/${buildingId}`);
  };

  return (
    <div className="Areas">
      {area.map((building) => (
        <div key={building.id}>
          <h2>{building.name}</h2>
          <p>{building.address}</p>
          <img
            className="building_amenities-image"
            src={building.image_url}
            alt={building.address}
          />
          <div>
            <button onClick={() => handleClick(building.id)}>
              Building Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AreaBuildings;
