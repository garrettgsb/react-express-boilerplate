import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Marker} from './Marker';

type compTypes = {text:string, lat:number, lng:number}
const AnyReactComponent = ({ text, lat, lng }: compTypes) => <div><img src={text} /></div>;


type PropTypes = { places: Array<any> }
export const Map = ({places}: PropTypes) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDhsjEG4ym4gr67z4IrupM9oDxPucQXRo0' }}
        center={{lat: places[0].latitude, lng: places[0].longitude}}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
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