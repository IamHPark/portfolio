import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarTop() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/"><img src="/logo.png" alt="" width={'100px'}/></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/about" className='nav-content'>About</Nav.Link>
        <Nav.Link href="/projects" className='nav-content'>Projects</Nav.Link>
        <Nav.Link href="/resume" className='nav-content'>Resume</Nav.Link>
      </Nav>
    </Container>
    </Navbar>

  )
}

export default NavbarTop;

