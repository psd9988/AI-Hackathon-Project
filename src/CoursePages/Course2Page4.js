import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/2/5.png";
import secondImage from "../images/2/6.jpg";
import thirdImage from "../images/2/1.png";
import fourthImage from "../images/2/2.jpg";

const Course2Page4 = () => {
  const navigate = useNavigate();

  const finishBtn = () => {
    navigate("/");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 4: Full-Stack Development</Card.Title>

          <Card.Text>
            <strong>4.1: Integrating Front-End and Back-End</strong>
            <br />
            Establish communication between the front-end and back-end, focusing
            on RESTful API design principles and effective data exchange to
            create seamless, interactive web applications.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.2: User Authentication and Authorization</strong>
            <br />
            Implement user authentication mechanisms, manage user sessions,
            cookies, and explore authorization techniques to enhance the
            security of your web applications.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.3: Deployment and Best Practices</strong>
            <br />
            Deploy your applications to hosting services, adopt version control
            with Git, and learn industry best practices to ensure code quality,
            maintainability, and optimal performance.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.4: Final Project</strong>
            <br />
            Plan and scope a full-stack project, building and presenting your
            final project. Engage in peer review and feedback sessions to refine
            your skills and showcase your proficiency in web development.
          </Card.Text>

          <Card.Img
            src={fourthImage}
            alt="Choosing the Right Tool"
          />
        </Card.Body>
      </Card>
      <Row
        className="mt-3"
        style={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <Col className="text-right">
          <Button variant="primary" onClick={finishBtn}>
            Finish
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Course2Page4;