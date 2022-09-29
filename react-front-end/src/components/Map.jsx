//import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React  from "react";
import "../components/Map.css";
import GoogleMapReact from "google-map-react";
import { useLoaderData } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { runsState } from "../hooks/useAppData";


import Markers from "./Markers";




export default function SimpleMap(){

  const marker = useRecoilValue(runsState);
  console.log(marker)


  const showMarkers = (marker) => {
    const runsArray = Object.values(marker);
    
    return runsArray.map((run) => <Markers key={run.id} name={run.name}  lat={run.latitude} lng={run.longitude} />);
  };


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
      {showMarkers(marker)}
         {/* {marker.map(({ latitude, longitude, id, name }) => {
          return (
            <Markers key={id} latitude={latitude} longitude={longitude} name={name} />
          );
        })}  */}
      </GoogleMapReact>
    </div>
  );
}


