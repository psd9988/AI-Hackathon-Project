import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../contexts/UserContext';
import { UserDataContext } from '../contexts/UserDataContext';
import { useNavigate } from 'react-router-dom';  

const LoginPage = () => {
  const {isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { setLoggedInUserData } = useContext(UserDataContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const containerStyle = {
    marginTop: '8rem', // Adjust the value as needed
  };

  const formStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const labelStyle = {
    color: '#333',
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://merd-api.merakilearn.org/hackathon20December/LOGIN',
        {
          email,
          password,
        }
      );

      const userData = response.data.data;


      setIsLoggedIn(true);
      setLoggedInUserData(userData);
      
      toast.success(response.data.message);
      // Redirect to the homepage after successful login
      navigate('/');

    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      console.error('Login error:', error);
    }
  };

  return (
    <Container style={containerStyle}>
      <Form style={formStyle} onSubmit={handleLogin}>
        <h2 className="text-center mb-4">Sign In</h2>
        <Form.Group controlId="formUsername">
          <Form.Label style={labelStyle}>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label style={labelStyle}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit" block>
          Login
        </Button>

        <p className="mt-3 text-center">
          Not registered yet? <a href="signup">Sign Up</a>
        </p>
      </Form>
    </Container>
  );
};

export default LoginPage;
