import React from "react";
import {Container} from "react-bootstrap";

import Hero from "../hero";
import PlantList from "../plantList/plantList";

export default function Garden(props) {

  return (
    <>
      <Hero
        header="My Garden"
        text="Your current happy family of plants!"
        graveyardButton="true"
      ></Hero>
      <Container>
        <PlantList />
      </Container>
    </>
  );
};