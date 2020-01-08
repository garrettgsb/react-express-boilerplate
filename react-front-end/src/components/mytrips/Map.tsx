import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Marker} from './Marker';
const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';

type compTypes = {text:string, lat:number, lng:number}

type PropTypes = { places: Array<any> }
export const Map = ({places}: PropTypes) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_KEY }}
        center={{lat: places[0].latitude, lng: places[0].longitude}}
        defaultZoom={11}
      >
        {places.map(place =>
          <Marker
            key={place.id}
            name={place.name}
            lat={place.latitude}
            lng={place.longitude}
          />
        )}

      </GoogleMapReact>
    </div>
  )
}