import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {buggbeImg} from '../../../assets/images/buggbe.png';

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
       <Container fluid>
          <Navbar.Brand as={Link} to="/"><img src={buggbeImg} alt=""/>Buggbe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="features">Features</Nav.Link>
            <Nav.Link as={Link} to="product-guide">Product Guide</Nav.Link>
            <Nav.Link as={Link} to="pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Container>
    </Navbar>
  )
}
