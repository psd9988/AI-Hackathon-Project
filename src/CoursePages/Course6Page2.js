import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/6/4.jpg";
import secondImage from "../images/6/5.jpg";
import thirdImage from "../images/6/6.jpg";

const Course6Page2 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course6Page3");
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
            Module 2: Case Study: Implementing AI in Customer Segmentation
          </Card.Title>

          <Card.Text>
            <strong>2.1: Understanding Customer Segmentation</strong>
            <br />
            Explore the concept of customer segmentation and its importance in
            targeted marketing. Learn traditional methods and challenges
            associated with segmentation.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.2: Introduction to AI-Powered Segmentation</strong>
            <br />
            Dive into a case study showcasing the implementation of AI in
            customer segmentation. Understand how machine learning algorithms
            can analyze data to create more refined customer segments.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.3: Real-world Examples and Results</strong>
            <br />
            Examine real-world examples of companies that have successfully
            implemented AI in customer segmentation. Evaluate the outcomes,
            improvements in targeting, and the impact on marketing ROI.
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

export default Course6Page2;