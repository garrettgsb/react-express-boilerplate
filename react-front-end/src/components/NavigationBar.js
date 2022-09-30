import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink eventKey="1" as={Link} to="/">
              Wixwing
            </NavLink>
          </Nav>
          <Nav>
            <NavLink eventKey="2" as={Link} to="/Register">
              Register
            </NavLink>
            <NavLink eventKey="3" as={Link} to="/Login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
