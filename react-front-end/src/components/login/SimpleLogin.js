import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
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
  // const { loginWithRedirect, user } = useAuth0();
  const login = function () {
    // test message
    console.log("Login button clicked");
    // console.log(props.children);


    // Set random user --> back-end cookie session
    // const userInfo = (Math.ceil(Math.random() * 5));
    // console.log(userInfo);

    // axios request to set cookie for user
    Axios.post("http://localhost:8080/login").then(() => {
      console.log("Server responded!");
    }).catch((err) => {
      console.log("There was an error with login", err);
    });

    // Axios.post("http://localhost:8080/login",{
    //   userId : userInfo
    // }).then(() => {
    //   console.log("Server responded!");
    // }).catch((err) => {
    //   console.log("There was an error with login", err);
    // });



    // loginWithRedirect().then((token) => {
    //   console.log("button was clicked")
    //   // Axios.get ('http://localhost:8080/api/garden').then((res) =>
    //   // console.log(res)).catch((err) => {
    //   //   console.log("something went wrong", err)
    //   // })
    //   Axios.post ('http://localhost:8080/login', {
    //     name : "",
    //     email: ""
    //   }).then(() => {
    //     console.log("server responded")
    //   }).catch((err) => {
    //     console.log("server did not respond", err.message)
    //     setTimeout(() => {
    //       console.log("server did not respond", err.message)
    //     }, 8000);
    //   })
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