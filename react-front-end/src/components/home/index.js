import React from "react";
import {Container} from "react-bootstrap";

import Hero from "./hero";

export default function HomePage(props) {

  return (
    <>
      <Hero />
      <Container>
      <h2>Home Page</h2>
      </Container>
    </>
  );
};
