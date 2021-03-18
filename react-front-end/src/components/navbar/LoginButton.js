import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Axios from "axios";

const Styles = styled.div`
  .btn {
    font-family: "Montserrat", Helvetica, sans-serif;
  }
`;

export default function LoginButton(props) {
  // destructure the auth0 hook
  const { loginWithRedirect, user } = useAuth0();
  const login = function () {
    
    loginWithRedirect().then((token) => {
      console.log("button was clicked")
      Axios.post ('http://localhost:8080/login', {
        name : "",
        email: ""
      }).then(() => {
        console.log("server responded")
      }).catch((err) => {
        console.log("server did not respond", err.message)
        setTimeout(() => {
          console.log("server did not respond", err.message)
        }, 8000);
      })
    }).catch(() => {
      console.log("error with loginWithRedirect")
      
    })
    
  }
  return(
    <Styles>
      <Button variant="success" onClick={login} >
        {props.children}
      </Button>
    </Styles>
  )
}