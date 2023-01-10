import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
       <Container fluid>
          <Navbar.Brand href="#">Buggbe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Container>
    </Navbar>
  )
}
