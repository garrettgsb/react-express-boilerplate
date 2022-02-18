import React from "react";
import { Segment, Button, Dropdown, Menu, Image } from "semantic-ui-react";
import logo from "../assets/logo.png";
import { getUserById } from "../helpers/selectors";

export default function Navbar({ users, user, login, logout }) {

  const loggedUser = getUserById(users, user);

  const renderAuthButton = () => {
    if (user) {
      return (
        <>
          <Menu.Item>Logged in as {loggedUser && loggedUser.name}</Menu.Item>
          <Dropdown item text="Menu">
            <Dropdown.Menu>
              <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item href="/newsfeed">Newsfeed</Dropdown.Item>
              <Dropdown.Item href={`/profile/${user}`}>Profile</Dropdown.Item>
              <Dropdown.Item href="/wishlist">Wishlist</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary onClick={logout}>
              Logout
            </Button>
          </Menu.Item>
        </>
      );
    } else {
      return (
        <Menu.Item>
          <Button primary onClick={login}>
            Login
          </Button>
        </Menu.Item>
      );
    }
  };

  return (
    <Segment inverted className="navbar-segment">
      <Menu inverted secondary>
        <Menu.Item className="navbar-logo">
          <Image href="/dashboard" src={logo} size="small" />
        </Menu.Item>
        <Menu.Menu position="right">{renderAuthButton()}</Menu.Menu>
      </Menu>
    </Segment>
  );
}