import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserDataContext } from '../contexts/UserDataContext';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { loggedInUserData ,setLoggedInUserData } = useContext(UserDataContext);
  

  const logoTextStyle = {
    color: '#ff9900',
  };

  const handleLogout = () => {

    // Perform any additional cleanup or actions on logout if needed
    setLoggedInUserData(null);
    setIsLoggedIn(false);
    toast.success('Logout successful!');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand style={logoTextStyle}>
        <Nav.Link as={NavLink} to="/">
        Hackathon LMS
      </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/mylearning">My Learning</Nav.Link>
            <Nav.Link as={NavLink} to="/discuss">Discuss</Nav.Link>
            <Nav.Link as={NavLink} to="/aiplanner">AI Lesson Planner </Nav.Link>
            {/* Add more navigation links as needed */}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        
        <div style={{ display: "flex", alignItems: "center"}}>
      {isLoggedIn && (
        <div style={{ color: "white", marginRight: "4rem"}}>
          <p style={{ margin: 0 }}>Hello, </p>
          <p style={{ margin: 0, color:'#ff9900'}}>
            <span>{loggedInUserData.name}</span>
          </p>
        </div>
      )}

      <Button
        variant="outline-light"
        onClick={isLoggedIn ? handleLogout : null}
        href={isLoggedIn ? null : "/login"}
      >
        {isLoggedIn ? `Logout` : 'Login'}
      </Button>
    </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
