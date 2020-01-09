import React, {useState} from 'react';
const MAP_KEY = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';
import ReactMapGL, {Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Pin} from './Pin';
import styled from 'styled-components';

const CityInfo = styled.p`
  font-size: 0.85em;
`

type PropTypes = { places: Array<any> }
export const Map = ({places}: PropTypes) => {

  const [viewport, setViewport] = useState<any>({
    mapboxApiAccessToken: MAP_KEY,
    width: '100vw',
    height: '100vh',
    latitude: places[0].latitude,
    longitude: places[0].longitude,
    zoom: 9,
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
    <ReactMapGL {...viewport} mapStyle="mapbox://styles/mapbox/streets-v11" onViewportChange={setViewport}>
      {cityPopup && <Popup tipSize={5} anchor="top" latitude={cityPopup.latitude} longitude={cityPopup.longitude} closeOnClick={false} onClose={() => setCityPopup({name: null, latitude: 0, longitude: 0})}><CityInfo>{cityPopup.name}</CityInfo></Popup>}
      {filterAttractions(places).map(place =>
        <Pin key={place.id} name={place.name} latitude={place.latitude} longitude={place.longitude} onClick={setCityPopup} />
      )}
    </ReactMapGL>
    </>
  )
}