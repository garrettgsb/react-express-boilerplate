//import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React  from "react";
import "../components/Map.css";
import GoogleMapReact from "google-map-react";
import { useLoaderData } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { runsState } from "../hooks/useAppData";


import Markers, { handleActiveMarker } from "./Markers";




export default function SimpleMap(){

  const marker = useRecoilValue(runsState);
  console.log(marker)

  


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
     //onClick={() => handleActiveMarker(run.id)} 
     />);
  };

  // const location = async () =>  {
  //   const result = await navigator.geolocation.getCurrentPosition((position) => {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;

  //   console.log(latitude);
  //   });
  //   console.log(result)
  // }

  // console.log(location())

  // navigator.geolocation.getCurrentPosition(function(position){
  //   const latitude = position.coords.latitude
  //   resolve({latitude});
  // })
  // .then(response => console.log(response))

//   let lat = "";
//   let lon = "";

//   const promise = new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(function(pos){
//         lat = pos.coords.latitude
//         lon = pos.coords.longitude
//         resolve({lat,lon});
//     }) 
// })

// promise.then(function(value) {
//       console.log(value.lat,value.lon)  
// });

  
  const defaultProps = {
    center: {
      lat:  10,
      lng:  10
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
        yesIWantToUseGoogleMapApiInternals
      >
        {showMarkers(marker)}
      </GoogleMapReact>
    </div>
  );
}


