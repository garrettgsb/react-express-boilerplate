import React from "react";
import {Container} from "react-bootstrap";

import NavMenu from "./navbar/index";


export default function Layout(props) {

  return (
    <>
      {/* <Container> */}
        {props.children}
      {/* </Container> */}
    </>
  );
};