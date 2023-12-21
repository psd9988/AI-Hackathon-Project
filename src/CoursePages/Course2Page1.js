import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/2/1.png";
import secondImage from "../images/2/2.jpg";
import thirdImage from "../images/2/3.jpg";
import fourthImage from "../images/2/4.png";

const Course2Page1 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course2Page2");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 1: Introduction to Web Development</Card.Title>

          <Card.Text>
            <strong>1.1: Overview of Web Development</strong>
            <br />
            Explore the vast landscape of web development, understanding its
            significance in the digital era and the evolution of technologies
            that shape the modern web.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.2: Setting Up Your Development Environment</strong>
            <br />
            Learn the essentials of setting up a robust development environment,
            including choosing a text editor, installing browsers, configuring
            developer tools, and embracing version control with Git.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.3: HTML5 Basics</strong>
            <br />
            Dive into HTML5, mastering its markup language, document structure,
            syntax, and the creation of interactive forms and input elements.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.4: CSS3 Fundamentals</strong>
            <br />
            Grasp the fundamentals of CSS3 styling, covering selectors,
            properties, values, box model, layouts, and responsive design
            techniques.
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
          <Button variant="primary" onClick={nextButton}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Course2Page1;