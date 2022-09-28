//import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React  from "react";
import "../components/Map.css";
import GoogleMapReact from "google-map-react";


import Markers from "./Markers";


const marker = [
  { id: 1, name: "Calgary", lat: 51.049999, lng: -114.06666 }
]

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 43,
      lng: -80
    },
    zoom: 7
  };

  const myKey = process.env.REACT_APP_MAP_API_KEY;

  return (
    <div style={{ height: '80vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: myKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {marker.map(({ lat, lng, id, name }) => {
          return (
            <Markers key={id} lat={lat} lng={lng} name={name} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}


