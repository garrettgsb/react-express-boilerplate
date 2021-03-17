import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";

export default function NavMenu(props) {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Leaf It To Me</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
        {/* <Nav className="ml-auto"> */}
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#link">Find a Plant</Nav.Link>
        </Nav>
          <Button variant="outline-success">Log In</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Nav, Navbar } from 'react-bootstrap';
// // import styled from 'styled-components';

// // const Styles = styled.div`
// //   .navbar {
// //     background-color: #222;
// //   }
// //   a, .navbar-brand, .navbar-nav .nav-link {
// //     color: #bbb;
// //     &:hover {
// //       color: white;
// //     }
// //   }
// // `;

// export default function NavMenu(){
//   return (
//   // <Styles>
//     <Navbar expand="lg">
//       <Navbar.Brand href="/">Code Life</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/">Home</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/garden">Garden</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/search">Search</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/login">Log In</Link>
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   // </Styles >
//   );
// }
