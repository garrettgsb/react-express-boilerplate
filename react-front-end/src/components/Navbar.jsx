import React from "react";
import { Segment, Button, Dropdown, Menu, Image } from "semantic-ui-react";
import logo from "../assets/logo.png";

export default function Navbar(props) {
  const { user } = props;

  const renderAuthButton = () => {
    if (user) {
      return (
        <>
          <Menu.Item name="logged in as {user}" />

          <Dropdown item text="Menu">
            <Dropdown.Menu>
              <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item href="/feed">Newsfeed</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary href="/dashboard">
              Logout
            </Button>
          </Menu.Item>
        </>
      );
    } else {
      return (
        <Menu.Item>
          <Button primary href="/dashboard">
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
          <Image src={logo} size="small" />
        </Menu.Item>
        <Menu.Menu position="right">{renderAuthButton()}</Menu.Menu>
      </Menu>
    </Segment>
  );
}