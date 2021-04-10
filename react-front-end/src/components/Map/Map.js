import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import './Map.scss';
import mapStyle from './mapStyle';

require('dotenv').config()
 
export class MapContainer extends Component {
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyle
    });
  }

  render() {
    const coords = { lat: 49.279793, lng: -123.115669 };
    return (
      <Map
        className="map"
        style={this.mapStyle}
        disableDefaultUI={true}
        google={this.props.google}
        zoom={10}
        initialCenter={coords}
        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
      >
        <Marker position={coords} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_KEY
})(MapContainer);