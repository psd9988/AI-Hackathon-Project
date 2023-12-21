import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {

    const logoTextStyle = {
        color: '#ff9900', // Set your desired color here
      };
    

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand style={logoTextStyle} href="homepage">Hackathon LMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
           
            <Nav.Link href="mylearning">My Learning</Nav.Link>
            <Nav.Link href="/discuss">Discuss</Nav.Link>
            {/* Add more navigation links as needed */}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Button variant="outline-light" href="login">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
