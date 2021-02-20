import React from "react";
import Button from "@material-ui/core/Button";

export default function LoginForm(props){
  return (
    <>
      <form onSubmit={props.submitLogin}>
        <input
          type="text"
          class="form-control-plaintext"
          value={props.userLogin}
          onChange={props.handleLogin}
          placeholder="username"
        ></input>

        <Button color="inherit" onClick={props.submitLogin}>
          Login
        </Button>
      </form>
    </>
  );
}