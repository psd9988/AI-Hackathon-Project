// HomePage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CourseList from './CourseList'; // Adjust the path accordingly

const HomePage = () => {
  const containerStyle = {
    marginTop: '8rem', // Adjust the value as needed
  };
  const courses = CourseList();

  return (
    <Container style={containerStyle}>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} lg={3} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={course.imageUrl} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Button variant="primary">Enroll</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
