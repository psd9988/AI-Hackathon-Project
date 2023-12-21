import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/5/2.jpg";
import secondImage from "../images/5/3.jpg";
import thirdImage from "../images/5/4.jpg";

const Course5Page3 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course5Page4");
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
            Module 3: Advanced Grammar for Fluent Speaking
          </Card.Title>

          <Card.Text>
            <strong>3.1: Conditional Sentences</strong>
            <br />
            Explore different types of conditional sentences and understand
            their appropriate usage in expressing hypothetical situations.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.2: Reported Speech</strong>
            <br />
            Master the transformation of direct speech into reported speech,
            including changes in verb tenses, pronouns, and time expressions.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.3: Modals and Advanced Verb Structures</strong>
            <br />
            Delve into the nuances of modals, phrasal verbs, and other advanced
            verb structures. Enhance your ability to express shades of meaning
            and attitude in your speech.
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

export default Course5Page3;