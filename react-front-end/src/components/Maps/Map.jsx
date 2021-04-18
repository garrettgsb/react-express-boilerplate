import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";
import '../../styles/App.scss';

export default function MapClass (){

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
