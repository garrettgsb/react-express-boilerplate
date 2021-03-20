import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
// import axios from "axios";

const Styles = styled.div`
  .btn {
    font-family: "Montserrat", Helvetica, sans-serif;
  }
`;

export default function LoginButton(props) {
  // destructure the auth0 hook
  const { loginWithRedirect } = useAuth0();
  const login = function () {

    // loginWithRedirect()
    // .then()

    // axios.get('http://localhost:8080/login/1', {
    //   withCredentials: true
    // })
    // .then((res) => {
    //   console.log("server responded");
    //   console.log(res.data);
    // })
    // .catch((err) => {
    //   console.log("server did not respond", err.message)
    //   // setTimeout(() => {
    //     //   console.log("server did not respond", err.message)
    //     // }, 8000);
    //   });

      loginWithRedirect();

    // loginWithPopup().then((token) => {
    //   console.log("Login button was clicked");})
    //   .then(() => {
    //   // console.log(user.name)
    //   // Axios.get ('http://localhost:8080/api/garden').then((res) =>
    //   // console.log(res)).catch((err) => {
    //   //   console.log("something went wrong", err)
    //   // })

    //   // setTimeout(() => {
    //   //   axios.get('http://localhost:8080/login/1').then((res) => {
    //   //     console.log("server responded");
    //   //     console.log(res.data);
    //   //   }).catch((err) => {
    //   //     console.log("server did not respond", err.message)
    //   //     // setTimeout(() => {
    //   //     //   console.log("server did not respond", err.message)
    //   //     // }, 8000);
    //   //   })
    //   // }, 2000);
    // }).catch(() => {
    //   console.log("error with loginWithRedirect")
    // })

  }
  return(
    <Styles>
      <Button variant="success" onClick={login} >
        {props.children}
      </Button>
    </Styles>
  )
}