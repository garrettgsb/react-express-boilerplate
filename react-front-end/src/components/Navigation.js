import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">WeRun</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/runs">Join A Run</Nav.Link>
            <Nav.Link href="#">Sign In</Nav.Link>
            <Nav.Link href="/register">Sign Up</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <NavDropdown title="More Options" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Option 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
