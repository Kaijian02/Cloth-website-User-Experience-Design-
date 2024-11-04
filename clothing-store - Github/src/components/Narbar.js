import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">CLOTH.Online</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Shop</Nav.Link>
          <Nav.Link href="#">On Sale</Nav.Link>
          <Nav.Link href="#">New Arrivals</Nav.Link>
          <Nav.Link href="#">Men</Nav.Link>
          <Nav.Link href="#">Women</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for products..."
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav.Link href="#">
          <i className="bi bi-cart"></i>
        </Nav.Link>
        <Nav.Link href="#">
          <i className="bi bi-person"></i>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
