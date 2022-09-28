import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../hooks/useAppData";
import useAppData from "../hooks/useAppData";

export default function Navigation() {
  const [user, setUser] = useRecoilState(userState);
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
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          WeRun
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
              <Link className="nav-link" to="#" onClick={signOut}>
                Sign Out
              </Link>
            )}
            {user !== null && (
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
