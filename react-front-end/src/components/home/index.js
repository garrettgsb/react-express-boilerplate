import React from "react";
import {Container} from "react-bootstrap";

import Hero from "../hero";

export default function HomePage(props) {

  return (
    <>
      <Hero
        header="Leaf It To Me"
        text="Grow plants that not only survive but thrive!"
        gardenButton="true"
      ></Hero>
      <Container>
      <h2>Home Page</h2>
      </Container>
    </>
  );
};
