import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/4/1.jpg";
import secondImage from "../images/4/2.png";
import thirdImage from "../images/4/3.jpg";

const Course4Page1 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course4Page2");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 1: Introduction to Deep Learning</Card.Title>

          <Card.Text>
            <strong>1.1: Introduction to Deep Learning</strong>
            <br />
            Explore the fundamentals of deep learning, its applications, and the
            evolution of artificial intelligence. Understand the role of neural
            networks in mimicking human-like intelligence.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.2: Setting Up the Deep Learning Environment</strong>
            <br />
            Install and configure deep learning frameworks such as TensorFlow
            and Keras. Understand the basics of GPU acceleration for enhanced
            model training.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.3: Artificial Neural Networks (ANN)</strong>
            <br />
            Dive into the basics of artificial neural networks, covering
            architecture, activation functions, and the backpropagation
            algorithm for training.
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

export default Course4Page1;