import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Attraction} from './Attraction';
import marker from '../../images/location.svg';

type compTypes = {text:string, lat:number, lng:number}
const AnyReactComponent = ({ text, lat, lng }: compTypes) => <div><img src={text} /></div>;


type PropTypes = { places: Array<any> }
export const Map = function({places}: PropTypes) {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDhsjEG4ym4gr67z4IrupM9oDxPucQXRo0' }}
        center={{lat: 59.955413, lng: 30.337844}}
        defaultZoom={5}
      >
        {places.map(place =>
          <Attraction
            name="name"
            img="img"
            lat={place.lat}
            lng={place.long}
          />
        )}

      </GoogleMapReact>
    </div>
  )
}