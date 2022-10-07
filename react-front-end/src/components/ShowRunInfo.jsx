import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RouteMap from "./RouteMap";
import "./ShowRunInfo.css";

export default function ShowRunInfo({ runName = "Gargoyle Park" }) {
  const zoom = 10;
  const [pageRefresh, setPageRefresh] = useState(false);
  const from = { lat: 43.4952921, lng: -79.9715306 };
  const to = { lat: 43.5058059, lng: -79.964735 };

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // useEffect(() => {
  //   if (!pageRefresh) {
  //     // window.location.reload(true);
  //     setPageRefresh(true);
  //   }
  // }, []);

  useRecoilState(userCoordinatesAtom);
  const myKey = process.env.REACT_APP_MAP_API_KEY;

  const handleApiLoaded = (mapp, maps) => {
    let map = mapp;

    function initialize() {
      map = new maps.Map(document.getElementById("run-path"), {
        mapId: "4493db09864aa939",
        center: new maps.LatLng(43.6532, -79.3832),
        zoom: 13,
        mapTypeId: maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      });
      console.log("Loaded!!!!!!!!");

      let directionsDisplay = new maps.DirectionsRenderer();
      let directionsService = new maps.DirectionsService();
      calculateAndDisplayRoute(
        new maps.LatLng(from.lat, from.lng),
        new maps.LatLng(to.lat, to.lng),
        directionsService,
        directionsDisplay
      );
      directionsDisplay.setMap(map);
      directionsDisplay.setOptions({
        polylineOptions: {
          strokeColor: "#80B918CC",
          strokeWeight: "8",
        },
      });
      directionsDisplay.setPanel(document.getElementById("run-path"));
    }
    maps.event.addDomListener(window, "load", initialize);
    function calculateAndDisplayRoute(
      start,
      end,
      directionsService,
      directionsDisplay
    ) {
      directionsService.route(
        {
          origin: start,
          destination: end,
          travelMode: maps.TravelMode.WALKING,
        },
        function (response, status) {
          if (status === maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    }
  };


  return (
    <>
      {/* <RouteMap zoom={zoom} from={from} to={to} /> */}

      <div
        id="run-path"
        style={{
          height: "600px",
          width: "600px",
          borderRadius: "2rem",
          border: "10px solid lightgray",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: myKey,
          }}
          defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        />
      </div>
    </>
  );
}
