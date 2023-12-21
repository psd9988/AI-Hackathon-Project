import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/3/4.jpg";
import secondImage from "../images/3/5.jpg";
import thirdImage from "../images/3/6.jpg";

const Course3Page2 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course3Page3");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 2: Supervised Learning</Card.Title>

          <Card.Text>
            <strong>2.1: Regression Models</strong>
            <br />
            Master regression techniques in machine learning, including simple
            linear regression, multiple linear regression, polynomial
            regression, and understand model evaluation metrics.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.2: Classification Models</strong>
            <br />
            Delve into classification algorithms such as logistic regression,
            decision trees, random forests, k-Nearest Neighbors (k-NN), and
            evaluate classification model performance.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.3: Support Vector Machines (SVM)</strong>
            <br />
            Understand the principles behind Support Vector Machines for both
            regression and classification tasks, and apply them to real-world
            datasets.
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

export default Course3Page2;