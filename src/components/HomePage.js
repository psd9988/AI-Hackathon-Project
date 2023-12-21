// HomePage.js
import React, {useContext, useEffect} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CourseList from './CourseList';
import { UserDataContext } from '../contexts/UserDataContext';

const HomePage = () => {
  const { loggedInUserData } = useContext(UserDataContext);

  useEffect(()=>{
    console.log(loggedInUserData);
  },[])

  const containerStyle = {
    marginTop: '8rem',
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
                {/* Update the href attribute to include the course ID */}
                <Button id={course.id} variant="primary" href={`/Course${course.id}Page1`}>
                  Enroll
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;