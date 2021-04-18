// import React from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import L, { Icon } from "leaflet";
// import '../../styles/App.scss';
// import * as parkData from '../../data/skateboard-parks.json';

// // export const icon = new Icon({
// //   iconUrl: "/skateboarding.svg",
// //   iconSize: [25, 25]
// // });

// export default function Mapp() {
//   const [activePark, setActivePark] = React.useState(null);
//   L.Icon.Default.imagePath='img/'


//   return (
//     <MapContainer center={[45.4, -75.7]} zoom={12}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />

//       {parkData.features.map(park => (
//         <Marker
//           key={park.properties.PARK_ID}
//           position={[
//             park.geometry.coordinates[1],
//             park.geometry.coordinates[0]
//           ]}
//           onClick={() => {
//             setActivePark(park);
//           }}
//           // icon={icon}
//         />
//       ))}

//       {activePark && (
//         <Popup
//           position={[
//             activePark.geometry.coordinates[1],
//             activePark.geometry.coordinates[0]
//           ]}
//           onClose={() => {
//             setActivePark(null);
//           }}
//         >
//             <h2>{activePark.properties.NAME}</h2>
//             <p>{activePark.properties.DESCRIPTIO}</p>
//         </Popup>
//       )}
//     </MapContainer>
//   );
// }