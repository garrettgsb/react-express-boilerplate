import React from "react";
import GoogleMapReact from "google-map-react";
import Markers from "./Markers";
import { useRecoilValue } from "recoil";
import { runsState } from "../hooks/useAppData";
import "../components/Map.css";


const DefaultMap = ({ center, zoom }) => {

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
    //  onClick={() => <div className="info" text={run.name}/>} 
     />);
  };

  const myKey = process.env.REACT_APP_MAP_API_KEY;

  return (
    <>
    <GoogleMapReact
    bootstrapURLKeys={{
      key: myKey
     }}
    defaultCenter={center}
    defaultZoom={zoom}
    yesIWantToUseGoogleMapApiInternals
    >
    
    {showMarkers(marker)}

    </GoogleMapReact>
    </>
  );
};

export default DefaultMap;
   