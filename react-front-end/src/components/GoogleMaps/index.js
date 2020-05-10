import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import styles from './GoogleMapsStyles.json';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 49.282730, lng: -123.1207351 }}
    defaultOptions={{
      fullscreenControl: false,
      styles: styles
    }}
  />
))

export default MyMapComponent;
