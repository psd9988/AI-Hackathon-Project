import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/3/4.jpg";
import secondImage from "../images/3/5.jpg";
import thirdImage from "../images/3/6.jpg";
import fourthImage from "../images/3/1.jpg";

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
            Module 4: Dimensionality Reduction and Model Selection
          </Card.Title>

          <Card.Text>
            <strong>4.1: Principal Component Analysis (PCA)</strong>
            <br />
            Learn the fundamentals of dimensionality reduction using PCA, a
            crucial technique for simplifying complex datasets while retaining
            essential information.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.2: Model Selection and Evaluation</strong>
            <br />
            Understand the importance of model selection, validation, and
            hyperparameter tuning. Explore techniques such as cross-validation
            and grid search for optimal model performance.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.3: Machine Learning in Python vs. R</strong>
            <br />
            Compare and contrast machine learning in Python and R, understanding
            the strengths and weaknesses of each language for different aspects
            of the machine learning workflow.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.4: Final Project and Practical Applications</strong>
            <br />
            Apply your knowledge by working on a final project that integrates
            various machine learning techniques. Explore real-world applications
            and challenges in the field. Engage in peer review and feedback
            sessions to enhance your skills.
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