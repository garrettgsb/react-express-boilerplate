//import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useEffect, useState }  from "react";
import "../components/Map.css";
import GoogleMapReact from "google-map-react";
import { useLoaderData } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { runsState } from "../hooks/useAppData";
import getUserCoords from "../hooks/getUserCoords";


import  Markers from "./Markers";

import DefaultMap from "./DefaultMap";


export default function SimpleMap(){

  

  const [center, setCenter] = useState({lat: 43.6532, lng: -79.3832})
  const zoom = 10;

  useEffect(() => {
    getUserCoords({ setCenter });
  }, [center]);
  
  
  const defaultProps = {
    center: {center},
      // lat:  43.6532,
      // lng:  -79.3832
    zoom: 7
  };



  const myKey = process.env.REACT_APP_MAP_API_KEY;

  return (
    <div style={{ height: '80vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
            key: myKey,
            language: 'en',
            region: 'can',
            libraries: ['places']
           }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        {showMarkers(marker)}
      </GoogleMapReact>
    </div>
  );
}


