import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./../App.css";
import { Icon } from "leaflet";
import Amenities from "../Buildings/Amenities";

function AmenMap() {
  const [building, setBuilding] = useState([]);

  const { buildingId } = useParams();

  useEffect(() => {
    axios.get(`/api/buildings/${buildingId}`).then((res) => {
      setBuilding(res.data);
    });
  }, [buildingId]);

  const buildingIcon = new Icon({
    iconUrl: "/building.png",
    iconSize: [30, 30],
  });

  // Allows building useEffect to load
  if (building.length < 1) {
    return "";
  }

  return (
    <MapContainer
      center={[building[0].latitude, building[0].longitude]}
      zoom={16}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        key={building[0].id}
        position={[building[0].latitude, building[0].longitude]}
        icon={buildingIcon}
      >
        <Popup>
          <div>
            <h2>{building[0].name}</h2>
            <p>{building[0].building_address}</p>
          </div>
        </Popup>
      </Marker>

      {/* Amenity markers */}
      <Amenities />
    </MapContainer>
  );
}

export default AmenMap;
