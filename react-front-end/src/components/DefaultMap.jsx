import React from "react";
import GoogleMapReact from "google-map-react";
import Markers from "./Markers";
import { useRecoilValue } from "recoil";
import { runsState } from "../hooks/useAppData";
import "../components/Map.css";


const DefaultMap = ({ center, zoom }) => {
  // const getMapOptions = () => {
  //   return {
  //     disableDefaultUI: true,
  //     mapTypeControl: true,
  //     streetViewControl: true,
  //     styles: [
  //       {
  //         featureType: "poi",
  //         elementType: "labels",
  //         stylers: [{ visibility: "on" }],
  //       },
  //     ],
  //   };
  // };


  const marker = useRecoilValue(runsState);


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

  const myKey = process.env.REACT_APP_MAP_API_KEY;

  return (
    <>
    <div style={{ height: '80vh', width: '80%' }}>
    <GoogleMapReact
    bootstrapURLKeys={{
      key: myKey
     }}
    defaultCenter={center}
    defaultZoom={zoom}
    //yesIWantToUseGoogleMapApiInternals
    //options={getMapOptions}
    >
    <Markers 
      lat={center.lat}
      lng={center.lng}
      text="Me"
      />
    {showMarkers(marker)}

    </GoogleMapReact>
    </div>
    </>
  );
};

export default DefaultMap;
   