import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/7/10.jpg";
import secondImage from "../images/7/11.jpg";
import thirdImage from "../images/7/12.jpg";
import fourthImage from "../images/7/13.jpg";

const Course7Page4 = () => {
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
            Module 4: Future Trends and Industry Adaptation
          </Card.Title>

          <Card.Text>
            <strong>4.1: Emerging Trends in AI and Book Publishing</strong>
            <br />
            Explore the latest trends and innovations in AI for book publishing.
            Discuss the potential impact on content creation, distribution, and
            reader engagement.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.2: Ethical Considerations in AI Publishing</strong>
            <br />
            Address ethical considerations related to AI in book publishing,
            including transparency, copyright issues, and the responsible use of
            AI-generated content.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.3: Creating an AI-Enhanced Publishing Strategy</strong>
            <br />
            Develop a strategic roadmap for integrating AI into book publishing
            workflows. Explore collaboration between authors, editors, and AI
            tools to optimize the publishing process.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>
              4.4: Final Project: AI-Enhanced Book Publishing Plan
            </strong>
            <br />
            Apply the knowledge gained throughout the course by creating an
            AI-enhanced book publishing plan. Develop a comprehensive strategy,
            analyze potential challenges, and present your approach. Engage in
            peer review and feedback to refine your plan.
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

export default Course7Page4;