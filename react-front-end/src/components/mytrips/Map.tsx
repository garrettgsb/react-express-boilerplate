import React, {useState} from 'react';
// import GoogleMapReact from 'google-map-react';
// const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';
const MAP_KEY = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';
import ReactMapGL, {Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Pin} from './Pin';


type PropTypes = { places: Array<any> }
export const Map = ({places}: PropTypes) => {

  const [viewport, setViewport] = useState<any>({
    mapboxApiAccessToken: MAP_KEY,
    width: '100vw',
    height: '100vh',
    latitude: places[0].latitude,
    longitude: places[0].longitude,
    zoom: 8,
  })

  const filterAttractions = (list:Array<any>) => {
    let attractions = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].latitude && list[i].longitude) {
        attractions.push(list[i])
      }
    }
    return attractions;
  }

  const [cityPopup, setCityPopup] = useState<any>({name: null, latitude: 0, longitude: 0});
  


  return (
    <>
    <ReactMapGL {...viewport} mapStyle="mapbox://styles/mapbox/dark-v9" onViewportChange={setViewport}>
      {cityPopup && <Popup tipSize={5} anchor="top" latitude={cityPopup.latitude} longitude={cityPopup.longitude} closeOnClick={false} onClose={() => setCityPopup({name: null, latitude: 0, longitude: 0})}><p>{cityPopup.name}</p></Popup>}
      {filterAttractions(places).map(place =>
        <Pin key={place.id} name={place.name} latitude={place.latitude} longitude={place.longitude} onClick={setCityPopup} />
      )}
    </ReactMapGL>
    </>
  )
}