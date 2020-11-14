import React from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    // <nav>
    //   <NavLink to="/" activeStyle={activeStyle} exact>
    //     Home
    //   </NavLink>
    //   {" | "}
    //   <NavLink to="/courses" activeStyle={activeStyle}>
    //     Courses
    //   </NavLink>
    //   {" | "}
    //   <NavLink to="/about" activeStyle={activeStyle}>
    //     About
    //   </NavLink>
    // </nav>
    <Navbar>
    <Navbar.Brand href="/">Proximate Centauri</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/careers">Careers</Nav.Link>
        <Nav.Link href="/contactus">Contact Us</Nav.Link>
         {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>  */}
      </Nav>
       <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> 
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;
