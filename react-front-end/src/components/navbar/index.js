// import React from "react";
// import {Navbar, Nav, Button} from "react-bootstrap";

// export default function NavMenu(props) {

//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home">Leaf It To Me</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="justify-content-end" style={{ width: "100%" }}>
//         {/* <Nav className="ml-auto"> */}
//           <Nav.Link href="#home">About</Nav.Link>
//           <Nav.Link href="#link">Find a Plant</Nav.Link>
//         </Nav>
//           <Button variant="outline-success">Log In</Button>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };




import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #FBF6EE;
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
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Leaf It To Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/garden">Garden</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/search">Search</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/login"><Button variant="outline-primary">Log In</Button></Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
  );
}
