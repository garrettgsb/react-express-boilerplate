//import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React  from "react";
import "../components/Map.css";
import GoogleMapReact from "google-map-react";
import { useLoaderData } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { runsState } from "../hooks/useAppData";
import getUserCoords from "../hooks/getUserCoords";


import  Markers from "./Markers";




export default function SimpleMap(){

  const marker = useRecoilValue(runsState);
  console.log(marker)

  // const InfoWindow = (marker) => {
  //   const runsArray = Object.values(marker);

  //   return runsArray.map((run) => 
  //   <InfoWindow
  //   key={run.id}
  //   name={run.name}
  //   text={run.description}
  //   />
  //   )
  // }
  // console.log(InfoWindow());


  const showMarkers = (marker) => {
    const runsArray = Object.values(marker);
    
    return runsArray.map((run) => <Markers
     key={run.id}
     name={run.name}
     lat={run.latitude}
     lng={run.longitude}
     text={run.id}
     tooltip={run.name}
    //  text={run.name}
    //  onClick={() => <div className="info" text={run.name}/>} 
     />);
  };


  
  const defaultProps = {
    center: {
      lat:  43.6532,
      lng:  -79.3832
    },
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


