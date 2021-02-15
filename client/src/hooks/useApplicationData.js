import axios from "axios";
import { useEffect, useState } from "react";
import {distance} from "../helpers/data"

export default function useApplicationData() {
  const [state, setState] = useState({
    users: [],
    stores: [],
    menus: [],
    orders: [],
    myCoords: {latitude: 49.281338241296815, longitude: -123.11492992211487}
  });
  
  
// const getLocation = () => {
//   const success = (position) => {
//    return {latitude: position.latitude, longitude: position.longitude}
//   }
//   const error = () =>{
//     return {latitude: 49.281338241296815, longitude: -123.11492992211487};
//   }
//   return navigator.geolocation.getCurrentPosition(success, error, {timeout:5000})
// };


  useEffect(() => {
    Promise.all([
      // getLocation(),
      axios.get("/api/stores"),
      axios.get("/api/users/7"),
      axios.get("/api/menu/1"),
      // axios.get("/api/orders/7"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          // myCoords: {...prev.myCoords.latitude = all[0].latitude, ...prev.myCoords.longitude = all[0].longitude},
          stores: distance(state.myCoords, all[0].data),
          users: all[1].data,
          menus: all[2].data,
          // orders: all[3].data,
        }));
      })
      .catch((err) =>
        console.log(
          `Error:\nStatus: ${err.response.status}\n${err.response.data}`
        )
      );
  }, []);
  return { state };
}
