import React from 'react';
import '../App.css';
import { Segment, Button, Dropdown, Menu, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { getUserById } from '../helpers/selectors';

export default function Navbar({ users, user, login, logout }) {
  const loggedUser = getUserById(users, user);

  const dashboardOrHomepage = () => {};

  const renderAuthButton = () => {
    if (user) {
      return (
        <>
          <Menu.Item className="logged-in">
            {' '}
            <Image src={loggedUser && loggedUser.avatar} avatar />
            <span style={{ fontSize: '18px' }}>
              Logged in as <b>{loggedUser && loggedUser.name}</b>
            </span>
          </Menu.Item>
          <Dropdown item text="Menu" className="dropdown-nav" color="grey">
            <Dropdown.Menu>
              <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item href="/newsfeed">Newsfeed</Dropdown.Item>
              <Dropdown.Item href={`/profile/${user}`}>Profile</Dropdown.Item>
              <Dropdown.Item href="/wishlist">Wishlist</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Link to="/">
              <Button className="button" inverted color="grey" onClick={logout} animated="fade">
                <Button.Content visible style={{ fontSize: '16px' }}>
                  Logout
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="sign-out" />
                </Button.Content>
              </Button>
            </Link>
          </Menu.Item>
        </>
      );
    } else {
      return (
        <Menu.Item>
          <Link to="/dashboard">
            <Button className="button" inverted color="grey" onClick={login} animated="fade">
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name="sign-in" />
              </Button.Content>
            </Button>
          </Link>
        </Menu.Item>
      );
    }
  };

  return (
    <Segment inverted className="navbar-segment">
      <Menu inverted secondary>
        <Link to={user ? '/dashboard' : '/'}>
          <Menu.Item className="navbar-logo">
            <Image src={logo} size="small" />
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">{renderAuthButton()}</Menu.Menu>
      </Menu>
    </Segment>
  );
}
