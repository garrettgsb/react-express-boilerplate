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
    axios.get('http://localhost:8080/logout', {
      withCredentials: true
    })
    .then((res) => {
      console.log("server responded to logout request");
      console.log(res.data);
    })
    .catch((err) => {
      console.log("server did not respond to logout request", err.message)
      });
    logout()
    // .then(() =>{
    //   axios.get("http://localhost:8080/logout", {
    //         withCredentials: true
    //         })
    //   .then(() => {
    //     console.log("Logging out of the server...");
    //   }).catch((err) => {
    //     console.log(err);
    //   })
    // });

  }

  return(
    <Styles>
      <Button variant="secondary" className="mt-0" onClick={() => appLogout()} >
        Log Out
      </Button>
    </Styles>
  )
}