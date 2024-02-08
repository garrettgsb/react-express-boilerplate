// settings.jsx

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Settings extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <h1>Settings</h1>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={this.onLogoutClick}>Logout</button>
      </div>
    );
  }
}

export default connect(null, { logoutUser })(Settings);
