import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/4/1.jpg";
import secondImage from "../images/4/2.png";
import thirdImage from "../images/4/3.jpg";

const Course4Page3 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course4Page4");
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
            Module 3: Recurrent Neural Networks (RNN) and Natural Language
            Processing (NLP)
          </Card.Title>

          <Card.Text>
            <strong>
              3.1: Introduction to Recurrent Neural Networks (RNN)
            </strong>
            <br />
            Explore the architecture of RNNs and their ability to model
            sequential data. Understand challenges such as vanishing gradients
            and solutions like Long Short-Term Memory (LSTM) networks.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.2: Natural Language Processing (NLP)</strong>
            <br />
            Apply RNNs to natural language processing tasks, including text
            generation, sentiment analysis, and language translation. Understand
            word embeddings and recurrent layers for NLP.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.3: Sequence-to-Sequence Models</strong>
            <br />
            Dive deeper into sequence-to-sequence models for tasks such as
            language translation. Understand the attention mechanism and its
            role in improving model performance.
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

export default Course4Page3;