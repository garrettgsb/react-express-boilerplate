import React from "react";
import {Container} from "react-bootstrap";

import Hero from "../hero";
import PlantListItem from "../plantList/plantListItem";

export default function Garden(props) {

  return (
    <>
      <Hero
        header="My Garden"
        text="Your current happy family of plants!"
        graveyardButton="true"
      ></Hero>
      <Container>
      <h2>My Garden</h2>

      <PlantListItem />

      </Container>
    </>
  );
};