import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/4/4.jpg";
import secondImage from "../images/4/5.jpg";
import thirdImage from "../images/4/6.jpg";
import fourthImage from "../images/4/1.jpg";

const Course4Page4 = () => {
  const navigate = useNavigate();

  const finishBtn = () => {
    navigate("/homepage");
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
            Module 4: Generative Adversarial Networks (GAN) and Reinforcement
            Learning
          </Card.Title>

          <Card.Text>
            <strong>
              4.1: Introduction to Generative Adversarial Networks (GAN)
            </strong>
            <br />
            Explore the concept of GANs and their application in generating
            realistic data, including images and text. Understand the
            adversarial training process.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.2: Reinforcement Learning Basics</strong>
            <br />
            Delve into reinforcement learning, covering concepts such as agents,
            environments, rewards, and Markov decision processes.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.3: Deep Reinforcement Learning</strong>
            <br />
            Apply deep learning to reinforcement learning tasks. Understand the
            role of deep Q-networks (DQN) and policy gradients in training
            intelligent agents.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.4: Final Project and Real-world Applications</strong>
            <br />
            Apply your deep learning knowledge to a final project that
            encompasses various techniques learned throughout the course.
            Explore real-world applications of deep learning and engage in peer
            review and feedback sessions to refine your skills.
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

export default Course4Page4;