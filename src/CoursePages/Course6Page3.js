import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/6/7.jpg";
import secondImage from "../images/6/8.jpg";
import thirdImage from "../images/6/9.jpg";

const Course6Page3 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course6Page4");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 3: Personalized Marketing with AI</Card.Title>

          <Card.Text>
            <strong>3.1: Personalization in Marketing</strong>
            <br />
            Explore the significance of personalized marketing and its impact on
            customer experience. Understand traditional personalization methods
            and their limitations.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.2: AI-Powered Personalization Techniques</strong>
            <br />
            Delve into case studies illustrating how AI can revolutionize
            personalized marketing. Examine recommendation systems, dynamic
            content creation, and adaptive user experiences.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>
              3.3: Measuring the Success of Personalized Campaigns
            </strong>
            <br />
            Analyze key metrics and KPIs for measuring the success of AI-powered
            personalized marketing campaigns. Learn how data-driven insights can
            enhance ongoing strategies.
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

export default Course6Page3;