import React from 'react';

const GeolocationButton = ({ map }) => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
      console.log("Geolocation is not supported by this device.");
    }
  };

  const showPosition = (position) => {
    // Do something with the obtained location
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  return (
    <button onClick={getLocation}>Use my device location</button>
  );
};

export default GeolocationButton;
