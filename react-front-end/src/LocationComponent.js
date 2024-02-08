// LocationComponent.js

import React, { useEffect, useState } from "react";

function CoordinatesComponent() {
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    // Make a request to the Express.js server
    fetch("http://localhost:8080/getCoordinates")
      .then((response) => response.json())
      .then((data) => setCoordinates(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Coordinates</h1>
      <p>Latitude: {coordinates.lat}</p>
      <p>Longitude: {coordinates.lng}</p>
    </div>
  );
}

export default CoordinatesComponent;
