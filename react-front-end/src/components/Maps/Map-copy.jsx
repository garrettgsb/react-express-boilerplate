import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { Icon } from "leaflet";
import '../../styles/App.scss';
import * as parkData from '../../data/skateboard-parks.json';

export default function MapClass (){

  // capture and state the park you want to click on
  const [activePark, setActivePark] = useState(null)
  L.Icon.Default.imagePath='img/'
  const position = [51.046537674112, -114.06380858447375]
  
  return (
    <div id="mapid">
      <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        {parkData.features.map(park => (
          <Marker 
            key={park.properties.PARK_ID} 
            position={[
              park.geometry.coordinates[1], 
              park.geometry.coordinates[0]
            ]}
            // popup in map
            onClick={() => {
              setActivePark(park);
            }}
          /> 
        ))}

        {activePark && (
          // popup needs to know it's position
          <Popup 
            position={[
              activePark.geometry.coordinates[1], 
              activePark.geometry.coordinates[0]
          ]}
          onClose={() => setActivePark(null)}
          >
            {/* <div> */}
              <h2>{activePark.properties.NAME}</h2>
              <p>{activePark.properties.DESCRIPTIO}</p>
            {/* </div> */}
          </Popup>
        )}
      </MapContainer>
    </div>
  )
}


