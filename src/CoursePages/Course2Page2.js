import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/2/5.png";
import secondImage from "../images/2/6.jpg";
import thirdImage from "../images/2/1.png";

const Course2Page2 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course2Page3");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 2: Front-End Development</Card.Title>

          <Card.Text>
            <strong>2.1: Introduction to JavaScript</strong>
            <br />
            Gain a foundational understanding of JavaScript, covering
            programming basics, variables, data types, operators, and control
            flow.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.2: DOM Manipulation and Events</strong>
            <br />
            Explore the manipulation of the Document Object Model (DOM),
            handling events, and creating dynamic content interactions with
            JavaScript.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.3: Advanced Front-End Technologies</strong>
            <br />
            Introduce yourself to advanced front-end technologies, including
            jQuery for DOM manipulation, asynchronous JavaScript, and an
            overview of popular front-end frameworks (React, Angular, or
            Vue.js).
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />
        </Card.Body>
      </Card>
      <Row
        className="mt-3"
        style={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <Col className="text-right">
          <Button variant="primary" onClick={nextButton}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Course2Page2;