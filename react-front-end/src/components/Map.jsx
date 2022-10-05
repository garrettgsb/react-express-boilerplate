import React from "react";
import "../components/Map.css";
import { useRecoilValue } from "recoil";
import { userCoordinatesAtom } from "../hooks/userCoords";

import DefaultMap from "./DefaultMap";

export default function SimpleMap() {
  const center = useRecoilValue(userCoordinatesAtom);
  const zoom = 10;

  return (
    <>
      <div className="map" style={{ height: "80vh", width: "80%" }}>
        <DefaultMap center={center} zoom={zoom} />
      </div>
    </>
  );
}
