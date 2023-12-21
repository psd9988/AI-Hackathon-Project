import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/8/1.jpg";
import secondImage from "../images/8/2.jpg";
import thirdImage from "../images/8/3.jpg";

const Course8Page1 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course8Page2");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>
            Module 1: Introduction to Web Development and HTML
          </Card.Title>

          <Card.Text>
            <strong>1.1: Overview of Web Development</strong>
            <br />
            Explore the fundamentals of web development, understand the role of
            HTML and CSS in building websites, and grasp the basics of the web
            development workflow.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.2: Introduction to HTML</strong>
            <br />
            Dive into HTML (Hypertext Markup Language), learning the syntax,
            structure, and essential HTML tags. Understand how HTML is used to
            create the basic structure of web pages.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.3: HTML Forms and Multimedia</strong>
            <br />
            Explore advanced HTML elements, focusing on creating forms for user
            input and integrating multimedia elements like images, audio, and
            video into web pages.
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

export default Course8Page1;