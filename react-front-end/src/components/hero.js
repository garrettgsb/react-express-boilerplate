import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import leafImage from "../assets/leaves-pothos-cropped-masked.jpeg";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./navbar/LoginButton";


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

export default function Hero(props) {
  const { isAuthenticated } = useAuth0();

  return (
    <Styles>
      <Jumbotron fluid>
        <Container>
        <h1>{props.header}</h1>
        <p>
          {props.text}
        </p>
        <p>
          {!isAuthenticated &&
            <LoginButton>Get Started</LoginButton>
          }
          {(isAuthenticated && props.gardenButton) &&
            <Link to="/garden">
              <Button variant="success">See My Garden</Button>
            </Link>
          }
          {(isAuthenticated && props.graveyardButton) &&
            <Link to="/graveyard">
              <Button variant="secondary">See Plant Graveyard</Button>
            </Link>
          }
        </p>
        </Container>
      </Jumbotron>
    </Styles>
  );
}