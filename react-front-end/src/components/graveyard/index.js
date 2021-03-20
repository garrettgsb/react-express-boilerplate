import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container} from "react-bootstrap";

import Hero from "../hero";
import PlantList from "../plantList/plantList";

export default function Graveyard(props) {
  const [myGraveyard, setMyGraveyard] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/garden", {withCredentials: true})
    .then((res) => {
      console.log("Request for garden data received by the server");
      // console.log(res.data);

      const filtered = res.data.filter((myPlant)=> {
        return myPlant.is_dead === true;
      })
      console.log(filtered);
      setMyGraveyard(filtered);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      <Hero
        header="Plant Graveyard"
        text="Your plants that have moved on to a better place. RIP."
        gardenButton="true"
      ></Hero>
      <Container>
      {/* <h2>Plant Graveyard</h2> */}
      <PlantList
          list={myGraveyard}
        />
      </Container>
    </>
  );
};