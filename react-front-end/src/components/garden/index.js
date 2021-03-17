import React from "react";
import {Container} from "react-bootstrap";

import Hero from "../hero";

export default function Garden(props) {

  return (
    <>
      <Hero
        header="My Garden"
        graveyardButton="true"
      ></Hero>
      <Container>
      <h2>My Garden</h2>
      </Container>
    </>
  );
};