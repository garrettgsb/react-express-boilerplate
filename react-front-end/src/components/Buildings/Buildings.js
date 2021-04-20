import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

//component to render all buildings
const Buildings = (props) => {
  const [buildings, setBuildings] = useState([]);

  const { buildingId } = useParams();

  const history = useHistory();

  const icon = new Icon({
    iconUrl: "/building.png",
    iconSize: [20, 20],
  });

  const buildingRating = props.buildingRating;

  useEffect(() => {
    if (buildingRating != null) {
      axios.get(`/api/buildings/ratings/${buildingRating}`).then((res) => {
        setBuildings(res.data);
      });
    } else {
      axios.get(`/api/buildings`).then((res) => {
        setBuildings(res.data);
      });
    }
  }, [buildingId]);

  const handleClick = (buildingId) => {
    history.push(`/buildings/${buildingId}`);
  };

  return (
    <div className="Buildings">
      {buildings.map((building) => (
        <Marker
          key={building.id}
          position={[building.latitude, building.longitude]}
          icon={icon}
        >
          <Popup>
            <div>
              <h2>{building.name}</h2>
              <p>{building.address}</p>
              <img
                className="building_amenities-image"
                src={building.image_url}
                alt={building.address}
              />
              <div>
                <button onClick={() => handleClick(building.id)}>
                  Property Details
                </button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default Buildings;
