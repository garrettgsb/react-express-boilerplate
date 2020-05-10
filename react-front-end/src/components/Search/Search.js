import React from 'react';
import MyMapComponent from '../GoogleMaps/index';

const Search = () => {
  return (
    <div>
      <h1>Search Route!</h1>
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
};

export default Search;
