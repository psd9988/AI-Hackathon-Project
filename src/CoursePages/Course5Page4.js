import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/5/5.png";
import secondImage from "../images/5/1.jpg";
import thirdImage from "../images/5/2.jpg";
import fourthImage from "../images/5/3.jpg";

const Course5Page4 = () => {
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
          <Card.Title>Module 4: Polishing Your Speaking Skills</Card.Title>

          <Card.Text>
            <strong>4.1: Common Grammar Pitfalls and How to Avoid Them</strong>
            <br />
            Identify and overcome common grammar mistakes to polish your
            speaking skills and convey your ideas more effectively.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.2: Vocabulary Enhancement for Fluent Speaking</strong>
            <br />
            Learn strategies for expanding your vocabulary and incorporating new
            words into your speech. Enhance your ability to express yourself
            with precision.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.3: Practical Speaking Exercises and Scenarios</strong>
            <br />
            Apply your grammar knowledge in practical speaking exercises and
            real-life scenarios. Practice speaking fluently and confidently in
            various contexts.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.4: Final Speaking Project and Peer Feedback</strong>
            <br />
            Apply everything you've learned in a final speaking project. Engage
            in peer review and feedback sessions to refine your speaking skills
            and gain valuable insights from your peers.
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

export default Course5Page4;