import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const containerStyle = {
    marginTop: '8rem',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data before making the API call
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }

      // Send a POST request to the API
      const response = await axios.post('https://merd-api.merakilearn.org/hackathon20December/SIGNUP', {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      // Check the API response
      if (response.data.Error) {
        // Handle error case
        console.error('API Error:', response.data.message);
      } else {
        // Handle successful registration
        toast.success('User registered successfully.');
        // Redirect or perform other actions as needed
      }
    } catch (error) {
      // Handle errors
      console.error('API Error:', error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <Container style={containerStyle}>
      <Form style={formStyle} onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form.Group controlId="formFullName">
          <Form.Label style={labelStyle}>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label style={labelStyle}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label style={labelStyle}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label style={labelStyle}>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit" block>
          Sign Up
        </Button>

        <p className="mt-3 text-center">
          Already have an account? <a href="login">Sign In</a>
        </p>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default SignUpPage;
