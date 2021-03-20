import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container} from "react-bootstrap";

import Hero from "../hero";
import PlantList from "../plantList/plantList";



export default function Garden(props) {
  const [myGarden, setMyGarden] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/garden", {withCredentials: true})
    .then((res) => {
      console.log("Request for garden data received by the server");
      console.log(res.data);
      setMyGarden(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

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
        />
      </Container>
    </>
  );
};