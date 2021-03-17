import React from "react";
import {Container} from "react-bootstrap";

import Hero from "../hero";

export default function Graveyard(props) {

  return (
    <>
      <Hero
        header="Plant Graveyard"
        text="Your plants that have moved on to a better place. RIP."
        gardenButton="true"
      ></Hero>
      <Container>
      <h2>Plant Graveyard</h2>
      </Container>
    </>
  );
};