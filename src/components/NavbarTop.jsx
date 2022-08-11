import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarTop() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">Heesoo</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarTop;

