import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Signup extends Component {
  handleLogin = () => {
    const { loginWithRedirect } = this.props.auth0;
    loginWithRedirect({authorizationParams: {
      screen_hint: "signup",
    }});
  };

  render() {
    return (
      <div>
        <h1>Please register</h1>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default withAuth0(Signup);