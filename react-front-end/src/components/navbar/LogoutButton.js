import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const Styles = styled.div`
  Button {
    font-family: "Averia Libre", cursive !important;
  }
`;

export default function LogoutButton() {
  // destructure the auth0 hook
  const { logout } = useAuth0();

  const appLogout = () => {
    logout()
    // .then(() =>{
    //   axios.get("http://localhost:8080/logout")
    //   .then(() => {
    //     console.log("Loging out of the server...");
    //   }).catch((err) => {
    //     console.log(err);
    //   })
    // });
  }

  return(
    <Styles>
      <Button variant="secondary" onClick={() => appLogout()} >
        Log Out
      </Button>
    </Styles>
  )
}