import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/5/4.jpg";
import secondImage from "../images/5/5.png";
import thirdImage from "../images/5/1.jpg";

const Course5Page2 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course5Page3");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 2: Sentence Structure and Syntax</Card.Title>

          <Card.Text>
            <strong>2.1: Sentence Types and Structures</strong>
            <br />
            Explore various sentence types, including simple, compound, and
            complex sentences. Understand sentence structures to create varied
            and engaging communication.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.2: Punctuation and Sentence Mechanics</strong>
            <br />
            Learn the rules of punctuation, including commas, periods,
            semicolons, and more. Master the mechanics of writing for clear and
            effective communication.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.3: Clauses and Phrases</strong>
            <br />
            Understand the role of clauses and phrases in sentence construction.
            Learn to identify and use them to add depth and complexity to your
            sentences.
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

export default Course5Page2;