import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const IfLoggedIn = () => {
  const containerStyle = {
    marginTop: '8rem', // Adjust the value as needed
  };

  return (
    <Container style={containerStyle}>
      <Row>
        <Col>
          <h1>Welcome to Your Learning Management System</h1>
          <p>
            Explore a variety of courses and enhance your skills. Your learning journey starts here!
          </p>
          <p>
            <Button variant="primary" href="#courses">
              Explore Courses
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default IfLoggedIn;
