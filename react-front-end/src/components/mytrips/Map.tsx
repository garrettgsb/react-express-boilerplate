import React, {useState} from 'react';
// import GoogleMapReact from 'google-map-react';
// const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';
const MAP_KEY = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


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

  return (
    <ReactMapGL {...viewport} mapStyle="mapbox://styles/mapbox/dark-v9" onViewportChange={setViewport}>
      {filterAttractions(places).map(place =>
        <Marker key={place.id} latitude={place.latitude} longitude={place.longitude}>
          <div>{place.name}</div>
        </Marker>
      )}
    </ReactMapGL>
    // <div style={{ height: '100vh', width: '100%' }}>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: GOOGLE_KEY }}
    //     center={{lat: places[0].latitude, lng: places[0].longitude}}
    //     defaultZoom={11}
    //   >
    //     {places.map(place =>
    //       <Marker
    //         key={place.id}
    //         name={place.name}
    //         lat={place.latitude}
    //         lng={place.longitude}
    //       />
    //     )}

    //   </GoogleMapReact>
    // </div>
  )
}