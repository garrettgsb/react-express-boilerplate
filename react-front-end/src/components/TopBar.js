import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome } from "react-icons/fa";
import "./TopBar.scss";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase/firebase";

const TopBar = (props) => {
  const { currentUser } = useAuth();

  const logoutHandler = () => {
    auth.signOut();
  };

  return (
    <Navbar
      bg="dark"
      variant="light"
      expand="lg"
      className="justify-content-center"
    >
      <Container>
        <Navbar.Brand href="/">
          <FaHome /> Home Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" variant="light">
          <Nav className="me-auto">
            <Nav.Link href="/homes_sale">Buy</Nav.Link>
            <Nav.Link href="/homes_rent">Rent</Nav.Link>
            <Nav.Link href="/sell">Sell</Nav.Link>
          </Nav>
          <Nav className="">
            {!currentUser && <Nav.Link href="/login">Login</Nav.Link>}
            {!currentUser && <Nav.Link href="/register">Register</Nav.Link>}
            {currentUser && <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
