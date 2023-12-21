import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/6/1.jpg";
import secondImage from "../images/6/2.jpg";
import thirdImage from "../images/6/3.jpg";

const Course6Page1 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course6Page2");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 1: Introduction to AI in Marketing</Card.Title>

          <Card.Text>
            <strong>1.1: Overview of AI in Marketing</strong>
            <br />
            Explore the transformative role of Artificial Intelligence (AI) in
            marketing strategies. Understand how AI technologies can enhance
            efficiency, personalize campaigns, and drive business growth.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.2: Key AI Technologies in Marketing</strong>
            <br />
            Examine essential AI technologies, including machine learning,
            natural language processing, and predictive analytics. Understand
            how these technologies can be applied to marketing challenges.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.3: Benefits and Challenges of AI in Marketing</strong>
            <br />
            Analyze the potential benefits of integrating AI into marketing
            practices, such as improved targeting and customer engagement.
            Address challenges and ethical considerations associated with AI
            implementation.
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

export default Course6Page1;