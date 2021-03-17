import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  Button {
    font-family: "Averia Libre", cursive !important;
  }
`;

export default function LogoutButton() {
  // destructure the auth0 hook
  const { logout } = useAuth0();

  return(
    <Styles>
      <Button variant="secondary" onClick={() => logout()} >
        Log Out
      </Button>
    </Styles>
  )
}