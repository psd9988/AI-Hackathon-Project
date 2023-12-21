import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/4/4.jpg";
import secondImage from "../images/4/5.jpg";
import thirdImage from "../images/4/6.jpg";

const Course4Page2 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course4Page3");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 2: Convolutional Neural Networks (CNN)</Card.Title>

          <Card.Text>
            <strong>
              2.1: Introduction to Convolutional Neural Networks (CNN)
            </strong>
            <br />
            Understand the importance of CNNs in image processing and
            recognition. Learn about convolutional layers, pooling, and the
            architecture of CNNs.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.2: Image Recognition with CNNs</strong>
            <br />
            Apply CNNs to image recognition tasks, including techniques for
            feature extraction, model training, and evaluation.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.3: Object Detection and Localization</strong>
            <br />
            Extend your knowledge of CNNs to object detection and localization.
            Explore techniques like region-based CNNs (R-CNN) and single-shot
            multibox detectors (SSD).
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

export default Course4Page2;