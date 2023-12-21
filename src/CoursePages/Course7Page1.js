import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/7/1.jpg";
import secondImage from "../images/7/2.jpg";
import thirdImage from "../images/7/3.jpg";

const Course7Page1 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course7Page2");
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
            Module 1: Introduction to AI in Book Publishing
          </Card.Title>

          <Card.Text>
            <strong>1.1: Overview of AI in Book Publishing</strong>
            <br />
            Explore the ways in which Artificial Intelligence (AI) is
            revolutionizing the book publishing industry. Understand the
            potential applications of AI in content creation, marketing, and
            reader engagement.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.2: Key AI Technologies for Publishing</strong>
            <br />
            Examine essential AI technologies relevant to book publishing,
            including natural language processing (NLP), machine learning, and
            sentiment analysis. Understand how these technologies can enhance
            various aspects of the publishing process.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>
              1.3: Benefits and Challenges of AI in Book Publishing
            </strong>
            <br />
            Analyze the advantages of incorporating AI into book publishing
            workflows, such as improved content quality and targeted marketing.
            Address challenges and considerations, including ethical concerns
            and potential biases in AI applications.
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

export default Course7Page1;