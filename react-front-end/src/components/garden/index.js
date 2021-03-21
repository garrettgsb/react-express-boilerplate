import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container} from "react-bootstrap";

// import { useAuth0 } from "@auth0/auth0-react";

import Hero from "../hero";
import PlantList from "../plantList/plantList";



export default function Garden(props) {
  // const { isAuthenticated, user } = useAuth0();
  const [myGarden, setMyGarden] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/garden", {withCredentials: true})
    .then((res) => {
      console.log("Request for garden data received by the server");
      // console.log(res.data);

      const filtered = res.data.filter((myPlant)=> {
        return myPlant.is_dead === false;
      })
      console.log(filtered);
      setMyGarden(filtered);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     console.log("authenticated?", isAuthenticated);
  //     axios.get("https://localhost:8080/login/1", {withCredentials: true})
  //     .then((res) => {
  //       console.log("login response", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Login Error:", err);
  //     });
  //   } else {
  //     console.log("Not yet logged in");
  //   }
  // }, [isAuthenticated]);

  return (
    <>
      <Hero
        header="My Garden"
        text="Your current happy family of plants!"
        graveyardButton="true"
      ></Hero>
      <Container>
        <PlantList
          list={myGarden}
          hook={setMyGarden}
        />
      </Container>
    </>
  );
};