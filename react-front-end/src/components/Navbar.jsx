import React from "react";
import { Segment, Button, Dropdown, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { getUserById } from "../helpers/selectors";

export default function Navbar({ users, user, login, logout }) {
  const loggedUser = getUserById(users, user);

  const dashboardOrHomepage = () => {};

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
            <Link to="/">
              <Button primary onClick={logout}>
                Logout
              </Button>
            </Link>
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
        <Link to={user ? "/dashboard" : "/"}>
          <Menu.Item className="navbar-logo">
            <Image src={logo} size="small" />
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">{renderAuthButton()}</Menu.Menu>
      </Menu>
    </Segment>
  );
}
