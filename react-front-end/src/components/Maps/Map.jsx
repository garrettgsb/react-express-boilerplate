import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";

const Map = () => {

  const [photoSpots, setPhotoSpots] = useState([])
  const [oneSpot, setOneSpot] = useState({})
  const url = 'http://localhost:8080/maps'

  useEffect(() => {
    axios.get(url)
    .then(res => {
      console.log("test", res.data);
      setPhotoSpots(res.data);
    })
  }, []);
  L.Icon.Default.imagePath='img/'
  const position = [51.046537674112, -114.06380858447375]

  
  return (
    <div id="mapid">
      <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {photoSpots.length && photoSpots.map((spot) => (
        <Marker
          key={spot.id}
          position={[
            spot.latitude,
            spot.longitude
          ]}
        //   onClick={() => {
        //     console.log("click");
        //     setOneSpot(spot);
        //   }}
        >
          <Popup>
            {spot.location_name} <br /> {spot.latitude}, {spot.longitude}.
          </Popup>
      </Marker>
      ))}
      </MapContainer>
    </div>
  )
}
export default Map;