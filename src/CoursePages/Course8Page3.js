import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/8/7.jpg";
import secondImage from "../images/8/8.jpg";
import thirdImage from "../images/8/9.jpg";

const Course8Page3 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course8Page4");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 3: Advanced HTML and CSS Concepts</Card.Title>

          <Card.Text>
            <strong>3.1: Semantic HTML and Accessibility</strong>
            <br />
            Explore semantic HTML elements and their significance in creating
            well-structured and accessible web content. Understand the
            importance of accessibility in web development.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.2: CSS Transitions and Animations</strong>
            <br />
            Enhance your web pages with CSS transitions and animations. Learn
            how to create engaging and interactive user experiences using CSS
            animation properties.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.3: CSS Preprocessors (e.g., Sass)</strong>
            <br />
            Introduce CSS preprocessors like Sass, understanding their features
            and advantages. Learn how to use variables, mixins, and other
            advanced features to streamline CSS development.
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

export default Course8Page3;