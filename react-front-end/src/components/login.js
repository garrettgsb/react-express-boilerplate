import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Login extends Component {
  handleLogin = () => {
    const { loginWithRedirect } = this.props.auth0;
    loginWithRedirect();
  };

  render() {
    return (
      <div>
        <h1>Please log in</h1>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default withAuth0(Login);