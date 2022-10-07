import React from "react";
import "../components/Map.css";
import { useRecoilValue } from "recoil";
import { userCoordinatesAtom } from "../hooks/userCoords";
import { Link } from "react-router-dom";
import DefaultMap from "./DefaultMap";

export default function SimpleMap() {
  const center = useRecoilValue(userCoordinatesAtom);
  const zoom = 10;

  return (
    <>
      <div className="map-container" style={{ height: "85vh", width: "100%" }}>
        <section className="map-info">
          <h2>Search</h2>
          <p>
            Find a run near you. Hover on the orange dots to see details about
            each run. Click to go to the run. You can also see a full list
            below.
          </p>
          <a href="#available-runs">
            <span class="material-symbols-rounded">
              expand_more
            </span>
          </a>
          <p>Can't find a run near you? Plan one <Link to="/create">here</Link>.</p>
        </section>
        <DefaultMap center={center} zoom={zoom} />
      </div>
    </>
  );
}
