import React from "react";
import {Jumbotron, Button, Container} from "react-bootstrap";
import styled from "styled-components";
import leafImage from "../../assets/leaves-pothos-cropped-masked.jpeg";

const Styles = styled.div`
  .jumbotron {
    height: 20em;
    background: url(${leafImage}) no-repeat fixed bottom;
    background-size: cover;
    font-family: "Montserrat", Helvetica, sans-serif;
    font-size: 1.5em;

    .container {
      margin-top: 60px;
      margin-top: 5em;
      text-align: center;

      h1 {
        font-family: "Averia Libre", cursive;
        margin-bottom: 0.5em;
      }
    }

  }
`;

export default function Hero() {
  return (
    <Styles>
      <Jumbotron fluid>
        <Container>
        <h1>Leaf It To Me</h1>
        <p>
          Grow plants that not only survive but thrive!
        </p>
        <p>
          <Button variant="primary">Get Started</Button>
        </p>
        </Container>
      </Jumbotron>
    </Styles>
  );
}