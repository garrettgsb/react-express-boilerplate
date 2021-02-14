import axios from "axios";
import { useEffect, useState } from "react";
import {distance} from "../helpers/data"

export default function useApplicationData() {
  const [state, setState] = useState({
    users: "",
    stores: "",
    menus: "",
    orders: "",
  });
  
  const myCoords = {latitude: 49.281338241296815, longitude: -123.11492992211487}

  // fix orders
  useEffect(() => {
    Promise.all([
      axios.get("/api/users/1"),
      axios.get("/api/stores"),
      axios.get("/api/menu/1"),
      axios.get("/api/users/1"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          users: all[0].data,
          stores: distance(myCoords, all[1].data),
          menus: all[2].data,
          orders: all[3].data,
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
