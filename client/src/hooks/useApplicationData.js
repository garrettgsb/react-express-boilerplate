import axios from "axios";
import { useEffect, useState } from "react";
import {distance} from "../helpers/data"

export default function useApplicationData() {
  const [state, setState] = useState({
    user: [{
      id: 0,
      username: "Guest",
      current_beans: 0,
      lifetime_beans: 0,
      phone_number: null,
      tier: 'Basic',
      type: 'c'
    }
    ],
    currentUser: 7,
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
          // nearbyStores: getNearbyStores(state.stores)
        }));
      })
      .catch((err) =>
        console.log(
          `Error:\nStatus: ${err.response.status}\n${err.response.data}`
        )
      );
  }, []);

  useEffect(() => {
    console.log('Running user effect')
    Promise.all([
      axios.get(`/api/users/${state.currentUser}`),
      axios.get(`/api/orders/${state.currentUser}`),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          user: all[0].data,
          orders: all[1].data
        }));
      })
      .catch((err) =>
        console.log(
          `Error:\nStatus: ${err.response.status}\n${err.response.data}`
        )
      );
  }, [state.currentUser]);


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
    console.log('run setStore')
    
   setState((prev) => ({
      ...prev,
      currentStore: storeId
    }))
  }

  const postOrder = () => {
    const order = {
      time_created: "2021-01-01 19:10:25",
      total_price: 1000,
      completed: true,
      user_id: 1,
      order_items: [
        {menu_id: 1},
        {menu_id: 2},
        {menu_id: 3}
      ]
    }
    return axios
    ({
      method: 'post',
      url: '/api/order',
      data: order
    })
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err.message))
  };

  return { state, setStore, postOrder };
}
