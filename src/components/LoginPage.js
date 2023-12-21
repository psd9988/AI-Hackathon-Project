import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
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

  return (
    <Container style={containerStyle}>
      <Form style={formStyle}>
        <h2 className="text-center mb-4">Sign In</h2>
        <Form.Group controlId="formUsername">
          <Form.Label style={labelStyle}>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter your Email Id" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label style={labelStyle}>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <Button className='mt-3' variant="primary" type="submit" block>
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
