import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";
import axios from "axios";

export const groceriesIcon = new Icon({
  iconUrl: "/groceries.png",
  iconSize: [25, 25],
});

export const icon = new Icon({
  iconUrl: "/building.png",
  iconSize: [25, 25],
});

function AmenMap() {

  const amenities = [
    {
      id: 1,
      area_id: 1,
      name:"Potato Shop", 
      type:"Groceries", 
      image_url: null,
      longitude: -122.399165, 
      latitude: 37.620430000000100
    },
    {
      id: 2,
      area_id: 1,
      name:"Tomato Shop", 
      type:"Groceries", 
      image_url: null,
      longitude: -122.39439100100000, 
      latitude: 37.78668401700000
    },
    {
      id: 3,
      area_id: 1,
      name:"Ice Cream Shop", 
      type:"Groceries", 
      image_url: null,
      longitude: -122.416759954, 
      latitude: 37.77959003500010
    },
    {
      id: 4,
      area_id: 1,
      name:"Ice Cream Shop", 
      type:"Groceries", 
      image_url: null,
      longitude: -122.414859954, 
      latitude: 37.78668401700000
    },
    {
      id: 5,
      area_id: 1,
      name:"Ice Cream Shop", 
      type:"Groceries", 
      image_url: null,
      longitude: -122.415739954, 
      latitude: 37.78668401700000
    },
  ]

  // ***** REMEMBER TO CHANGE BUILDING LAT LONG IN DB ***** //
  const building = [
    {
      id: 1,
      area_id: 1,
      name: "Grace Court",
      address: "1601 Comox St",
      image_url: "https://unsplash.com/photos/RFDP7_80v5A",
      longitude: -122.416759954,
      latitude: 37.78668401700000
    }
  ]

  return (

    <MapContainer center={[building[0].latitude, building[0].longitude]} zoom={18}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
          key={building[0].id}
          position={[building[0].latitude, building[0].longitude]}
          icon={icon}
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
          icon={groceriesIcon}
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