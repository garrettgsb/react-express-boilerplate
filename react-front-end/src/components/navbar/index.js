import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Styles = styled.div`
  .navbar {
    background-color: #FBF6EE;
    height: 120px;
    font-size: 1.5em;
    align-items: center;

    .nav-item {
      line-height: 80px;

      .btn {
        margin-top: 10px;
        font-size: 0.9em;
        font-family: "Averia Libre", Helvetica, sans-serif !important;
      }
    }
  }
  .navbar-brand {
    font-size: 125%;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #3B715A;
    font-family: "Averia Libre", Helvetica, sans-serif !important;
    text-decoration: none;
    &:hover {
      color: #F9C78C;
    }
  }
`;

export default function NavMenu(){
  const { user, isAuthenticated } = useAuth0();

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Leaf It To Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex-row">
            <Nav.Item>
              <Nav.Link>
                <Link to="/" class="pr-4">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/garden" class="pr-4">Garden</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/search" class="pr-4">Search</Link>
              </Nav.Link>
            </Nav.Item>
            {!isAuthenticated &&
            <Nav.Item>
              <LoginButton>Log In</LoginButton>
            </Nav.Item>
            }
              {isAuthenticated && <>
            <Nav.Item>
              <LogoutButton />
            </Nav.Item>
            <p class="pr-4"></p>
            <Nav.Item class="pr-4">
                <Image class="pr-4" src={user.picture} alt={user.name} roundedCircle fluid />
            </Nav.Item>
            </>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
  );
}
