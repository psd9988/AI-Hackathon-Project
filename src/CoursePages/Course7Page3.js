import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/7/7.jpg";
import secondImage from "../images/7/8.jpg";
import thirdImage from "../images/7/9.jpg";

const Course7Page3 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course7Page4");
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
            Module 3: AI in Book Marketing and Recommendation
          </Card.Title>

          <Card.Text>
            <strong>3.1: Personalized Book Recommendations</strong>
            <br />
            Explore how AI can enhance book discovery through personalized
            recommendations. Understand recommendation algorithms and their
            application in marketing strategies.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.2: Targeted Marketing Campaigns</strong>
            <br />
            Delve into case studies illustrating how AI can optimize book
            marketing campaigns. Analyze data-driven insights, customer
            segmentation, and the impact on book sales.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.3: AI-Powered Book Cover Design</strong>
            <br />
            Examine the role of AI in designing book covers. Explore algorithms
            that analyze market trends and reader preferences to create visually
            appealing and marketable book covers.
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

export default Course7Page3;