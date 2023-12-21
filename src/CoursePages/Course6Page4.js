import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/6/10.jpg";
import secondImage from "../images/6/11.jpg";
import thirdImage from "../images/6/12.jpg";
import fourthImage from "../images/6/13.jpg";

const Course6Page4 = () => {
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
          <Card.Title>
            Module 4: Future Trends and Ethical Considerations
          </Card.Title>

          <Card.Text>
            <strong>4.1: Emerging Trends in AI and Marketing</strong>
            <br />
            Explore cutting-edge AI technologies and trends that are shaping the
            future of marketing. Discuss the potential impact on customer
            engagement and industry dynamics.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.2: Ethical Considerations in AI Marketing</strong>
            <br />
            Address ethical concerns related to AI in marketing, including data
            privacy, transparency, and bias. Learn best practices for ensuring
            responsible AI use.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.3: Creating a Roadmap for AI Implementation</strong>
            <br />
            Develop a strategic roadmap for integrating AI into marketing
            initiatives. Explore steps for successful implementation,
            collaboration between marketing and AI teams, and ongoing
            optimization.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.4: Final Project: AI-Powered Marketing Campaign</strong>
            <br />
            Apply the knowledge gained throughout the course by designing an
            AI-powered marketing campaign. Develop a comprehensive plan, analyze
            potential challenges, and present your strategy. Engage in peer
            review and feedback to refine your approach.
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

export default Course6Page4;