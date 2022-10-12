import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../hooks/useAppData";
import useAppData from "../hooks/useAppData";
import "../styles/Navigation.css";
import logo from "../images/main-logo.png";

export default function Navigation() {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const { logout } = useAppData();

  const signOut = () => {
    logout().then((status) => {
      if (status === null) {
        navigate("/");
      }
    });
  };

  return (
    <Navbar id="navigation" bg="light" expand="lg">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/runs">
              Join A Run
            </Link>
          </Nav>
          <Nav pullRight>
            {user === null && (
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            )}
            {user === null && (
              <Link className="nav-link" to="/register">
                Sign Up
              </Link>
            )}

            {user !== null && (
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            )}
            {user !== null && (
              <Link className="nav-link" to="#" onClick={signOut}>
                Sign Out
              </Link>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
