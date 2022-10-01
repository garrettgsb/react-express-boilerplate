//import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useEffect, useState }  from "react";
import "../components/Map.css";
import GoogleMapReact from "google-map-react";
import { useLoaderData } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userCoordinatesAtom  from "../hooks/getUserCoords";
import { runsState } from "../hooks/useAppData";


import  Markers from "./Markers";

import DefaultMap from "./DefaultMap";


// const SimpleMap = () => {
//   const center = useRecoilValue(userCoordinatesAtom);
//   const zoom = 10;

//   return (
//     <>
//      <div className="map" style={{ height: '80vh', width: '80%' }}>
//       <DefaultMap center={center} zoom={zoom} />
//      </div>
//     </>
//   )
// }

// export default SimpleMap;
export default function SimpleMap(){


  const center = useRecoilValue(userCoordinatesAtom);
  console.log(center)
  //const [center, setCenter] = useState({lat: 43.6532, lng: -79.3832})
  const zoom = 10;

  // useEffect(() => {
  //   getUserCoords({ setCenter });
  // }, [center]);

  return (
    <>
    <div className="map" style={{ height: '80vh', width: '80%' }}>
      <DefaultMap center={center} zoom={zoom} />
    </div>
    </>  

  );
}


