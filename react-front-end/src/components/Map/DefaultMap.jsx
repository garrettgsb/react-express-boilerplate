import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Markers from "./Markers";
import { useRecoilState, useRecoilValue } from "recoil";
import { runsState } from "../../hooks/useAppData";
import "../../styles/Map.css";
import { userCoordinatesAtom } from "../../hooks/userCoords";

const DefaultMap = ({ center, zoom }) => {
  const runs = useRecoilValue(runsState);
  const [currentLocation, setCurrentLocation] =
    useRecoilState(userCoordinatesAtom);

  const showMarkers = (runs) => {
    const runsArray = Object.values(runs);
    return runsArray.map((run) => (
      <Markers
        key={run.id}
        id={run.id}
        name={run.name}
        description={run.name}
        distance={run.distance}
        date={run.date}
        lat={run.latitude}
        lng={run.longitude}
      />
    ));
  };

  const myKey = process.env.REACT_APP_MAP_API_KEY;
  useEffect(() => {
    function getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      });
    }
    getLocation();
  }, []);
  return (
    <>
      <div className="map" style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: myKey,
          }}
          defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
          center={currentLocation}
          defaultZoom={zoom}
        >
          <Markers
            lat={center.lat}
            lng={center.lng}
            id="Me"
            description="You are here!"
          />
          {showMarkers(runs)}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default DefaultMap;
