import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/7/4.jpg";
import secondImage from "../images/7/5.jpg";
import thirdImage from "../images/7/6.jpg";

const Course7Page2 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course7Page3");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 2: AI in Content Creation</Card.Title>

          <Card.Text>
            <strong>2.1: AI-Generated Content</strong>
            <br />
            Explore the use of AI in content creation, including automated
            writing tools, natural language generation, and the creation of book
            summaries. Understand the implications for authors and publishers.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.2: AI Editing and Proofreading</strong>
            <br />
            Examine AI-powered editing and proofreading tools that enhance the
            quality and efficiency of the editing process. Learn how AI can
            identify grammar, style, and consistency issues.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.3: Case Study: AI-Assisted Writing Platforms</strong>
            <br />
            Dive into case studies showcasing successful AI-assisted writing
            platforms. Evaluate how authors and publishers have benefited from
            AI-powered content creation tools.
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

export default Course7Page2;