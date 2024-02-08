// profile.jsx based on user's id and display the user's information

import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../actions/userActions";
import { Link } from "react-router-dom";

class Profile extends Component {
  componentDidMount() {
    this.props.getUserProfile();
  }

  render() {
    const { user } = this.props.user;
    return (
      <div>
        <h1>Profile</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <Link to="/settings">Settings</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUserProfile })(Profile);
