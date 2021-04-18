import React, { useEffect } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";
import '../../styles/App.scss';

export default function MapClass (){

  useEffect(() => {
    axios.get(`http://localhost:8080/maps`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    .then((response) => {console.log(response.data)});
  }, []);

  L.Icon.Default.imagePath='img/'
  const position = [51.046537674112, -114.06380858447375]

  
  return (
    <div id="mapid">
      <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
