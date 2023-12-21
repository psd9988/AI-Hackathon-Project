import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/5/1.jpg";
import secondImage from "../images/5/2.jpg";
import thirdImage from "../images/5/3.jpg";

const Course5Page1 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course5Page2");
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
            Module 1: Grammar Foundations for Effective Communication
          </Card.Title>

          <Card.Text>
            <strong>1.1: Introduction to English Grammar</strong>
            <br />
            Explore the essential components of English grammar, including parts
            of speech, sentence structure, and common grammatical terms.
            Understand the importance of grammar in effective communication.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.2: Nouns and Pronouns</strong>
            <br />
            Master the usage of nouns and pronouns, including types, agreement,
            and appropriate pronoun reference. Enhance your ability to express
            ideas clearly and concisely.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.3: Verbs and Tenses</strong>
            <br />
            Dive into the world of verbs, understanding different tenses, verb
            forms, and the correct usage of auxiliary verbs. Improve your
            ability to convey actions and states accurately.
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

export default Course5Page1;