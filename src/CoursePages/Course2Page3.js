import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/2/2.jpg";
import secondImage from "../images/2/3.jpg";
import thirdImage from "../images/2/4.png";

const Course2Page3 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course2Page4");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 3: Back-End Development</Card.Title>

          <Card.Text>
            <strong>3.1: Introduction to Node.js</strong>
            <br />
            Set up a Node.js environment and delve into module basics, building
            a simple server to understand the core principles of server-side
            JavaScript development.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.2: Express.js Framework</strong>
            <br />
            Explore Express.js, covering its core concepts such as routing,
            middleware, and handling requests and responses for building robust
            and scalable web applications.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.3: Database Fundamentals</strong>
            <br />
            Gain insights into databases, both SQL and NoSQL, connecting Node.js
            to databases, and mastering CRUD operations to interact with data
            efficiently.
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

export default Course2Page3;