import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";



function AmenMap() {
  const [amenities, setAmenities] = useState([]);
  // const [building, setBuilding] = useState([]);

  //   const { buildingId } = useParams();

  //   useEffect(() => {
  //     axios.get(`/api/buildings/${buildingId}`).then((res) => {
  //       setBuilding(res.data[0]);
  //     });
  //   }, [buildingId]);

    useEffect(() => {
      axios.get("/api/amenities").then((res) => {
        setAmenities(res.data)
      });
    }, [])


  const buildingIcon = new Icon({
    iconUrl: "/building.png",
    iconSize: [30, 30],
  });

  console.log('YO', building);
  

  const getIcon = (amenity) => {
    const image = 
    amenity.type === "School" ? "/bank.png" : 
    amenity.type === "Groceries" ? "/groceries.png" :
    amenity.type === "Park" ? "/park.png" :
    amenity.type === "Restaurant" ? "/restaurant.png" :
    "/cafe.png";

    return new Icon({
      iconUrl: image,
      iconSize: [20, 20]
    })
  } 


  const building = [
    {
      id: 1,
      area_id: 1,
      name: "Grace Court",
      address: "1601 Comox St",
      image_url: "https://unsplash.com/photos/RFDP7_80v5A",
      latitude: 37.7793,
      longitude: -122.4192,
    },
  ];

  return (
    <MapContainer
      center={[building[0].latitude, building[0].longitude]}
      zoom={15}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        key={building.id}
        position={[building[0].latitude, building[0].longitude]}
        icon={buildingIcon}
      >
        <Popup>
          <div>
            <h2>{building[0].address}</h2>
          </div>
        </Popup>
      </Marker>

      {amenities.map((amenity) => (
        <Marker
          key={amenity.id}
          position={[amenity.latitude, amenity.longitude]}
          icon={getIcon(amenity)}
        >
          <Popup>
            <div>
              <h2>{amenity.name}</h2>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default AmenMap;
