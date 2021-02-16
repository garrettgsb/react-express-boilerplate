import axios from "axios";
import { useEffect, useState } from "react";
import {distance} from "../helpers/data"

export default function useApplicationData() {
  const [state, setState] = useState({
    user: {
      username: "Guest"
    },
    currentUser: 0,
    currentStore: 1,
    stores: [],
    menuItems: [],
    orders: [],
    myCoords: {latitude: 49.281338241296815, longitude: -123.11492992211487}
  });
  
  //get location fn

  useEffect(() => {
    console.log('Running App Start effect')
    Promise.all([
      // getLocation(),
      axios.get("/api/stores"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          stores: distance(state.myCoords, all[0].data),
        }));
      })
      .catch((err) =>
        console.log(
          `Error:\nStatus: ${err.response.status}\n${err.response.data}`
        )
      );
  }, []);

  // useEffect(() => {
  //   console.log('Running user effect')
  //   Promise.all([
  //     axios.get(`/api/users/${state.currentUser}`),
  //     axios.get(`/api/orders/${state.currentUser}`),
  //   ])
  //     .then((all) => {
  //       setState((prev) => ({
  //         ...prev,
  //         user: all[0].data,
  //         orders: all[1].data
  //       }));
  //     })
  //     .catch((err) =>
  //       console.log(
  //         `Error:\nStatus: ${err.response.status}\n${err.response.data}`
  //       )
  //     );
  // }, [state.currentUser]);


  useEffect(() => {
    console.log('Running menu effect')
      axios.get(`/api/menu/${state.currentStore}`)
      .then((result) => {
        setState((prev) => ({
          ...prev,
          menuItems: result.data,
        }));
      })
      .catch((err) =>
        console.log(
          `Error:\nStatus: ${err.response.status}\n${err.response.data}`
        )
      );
  }, [state.currentStore]);

  
  const setStore = (storeId) => {
    console.log('run set store')
    
   setState((prev) => ({
      ...prev,
      currentStore: storeId
    }))
  }

  return { state, setStore };
}
