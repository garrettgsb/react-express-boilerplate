import { atom } from "recoil";


const userCoordinatesAtom = atom({
  key: "userCoordinatesAtom",
  default: { lat: 43.6532, lng: -79.3832 },
});
export default userCoordinatesAtom;





// const getUserCoords = ({ setCenter }) => {
//   const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };

//   const success = (pos) => {
//     let coords = pos.coords;
//     setCenter({ lat: coords.latitude, lng: coords.longitude });
//   };

//   const error = (err) => {
//     console.warn(
//       `There was an error: ${err.code}, ${err.message}`
//     );
//   };

//   return navigator.geolocation.getCurrentPosition(success, error, options);

// };

//export default getUserCoords;
//export default userCoordinatesAtom;