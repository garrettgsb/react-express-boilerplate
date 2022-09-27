//import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React  from "react";
import "../components/Map.css";
import GoogleMapReact from "google-map-react";


export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const myKey = process.env.REACT_APP_MAP_API_KEY;

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: myKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}


// const Map = ({ center, zoom }) => {
//   const mapOptions = () => {
//     return {
//       disableDefaultUI: true,
//       mapTypeControl: true,
//       streetViewControl: true,
//       styles: [
//         {
//           featureType: "poi",
//           elementType: "labels",
//           stylers: [{ visibility: "on" }],
//         },
//       ],
//     };
//   };

//   const key = process.env.REACT_APP_MAP_API_KEY;

//   return (
//     <>
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: key }}
//       defaultCenter={center}
//       defaultZoom={zoom}
//       options={mapOptions}
//       >
      
//       </GoogleMapReact>
//     </>
//   )

// }

// export default Map;



// export default function Map() {

// const key = process.env.REACT_APP_MAP_API_KEY;

// const defaultMap = {
//   center: {
//     lat: 43,
//     lgn: -80
//   },
//   zoom: 7
// };

// return (
//   <div style={{height: '100vh', width: '100%'}}>
//      <GoogleMapReact
//       bootstrapURLKeys={{key: key}}
//       defaultCenter={defaultMap.center}
//       defaultZoom={defaultMap.zoom}
//       >
//     </GoogleMapReact>
//   </div>
 
// );
// };
// // Loads the map using API KEY
// const { isLoaded } = useLoadScript({
//     googleMapsApiKey: key,
//     libraries
// });
// // This returns while map is being loaded
// if (!isLoaded) return <div>Loading...</div>

// //markers
// const [activeMarker, setActiveMarker] = useState(null);
// const handleActiveMarker = (marker) => {
//   if (marker === activeMarker) {
//     return;
//   }
//   setActiveMarker(marker);
// };

// return (
//     <GoogleMap 
//         zoom={7}
//         center={{lat: 43, lng: -80}} 
//         mapContainerClassName='map-container'
//         onClick={() => setActiveMarker(null)}
//     >
//       {/* {markers.map(({ id, name, position }) => (
//         <Marker
//         key={id}
//         position={position}
//         onClick={() => handleActiveMarker(id)}
//       >
//         {activeMarker === id ? (
//           <InfoWindow onCloseClick={() => setActiveMarker(null)}>
//             <div>{name}</div>
//           </InfoWindow>
//         ) : null}
//       </Marker>
//       ))} */}
//     </GoogleMap>
//     )
// }