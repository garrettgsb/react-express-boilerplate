import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React from "react";
import "../components/Map.css";

const libraries = ["places"]
const key = process.env.REACT_APP_MAP_API_KEY;

export default function Map() {
// Loads the map using API KEY
const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
    libraries
});
// This returns while map is being loaded
if (!isLoaded) return <div>Loading...</div>
return (
    <GoogleMap 
        zoom={9}
        center={{lat: 43, lng: -80}} 
        mapContainerClassName='map-container'
    ></GoogleMap>
    )
}