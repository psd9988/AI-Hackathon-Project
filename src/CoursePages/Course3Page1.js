import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/3/1.jpg";
import secondImage from "../images/3/2.jpg";
import thirdImage from "../images/3/3.png";

const Course3Page1 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course3Page2");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 1: Introduction to Machine Learning</Card.Title>

          <Card.Text>
            <strong>1.1: Introduction to Machine Learning</strong>
            <br />
            Explore the foundations of machine learning, understand its
            applications, and the impact it has on various industries. Gain
            insights into supervised and unsupervised learning.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.2: Setting Up the Development Environment</strong>
            <br />
            Install Python and R, set up essential libraries (e.g., NumPy,
            Pandas), and understand the basics of Jupyter Notebooks for machine
            learning experimentation.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.3: Data Preprocessing in Machine Learning</strong>
            <br />
            Dive into the crucial steps of data preprocessing, covering data
            cleaning, handling missing values, encoding categorical data, and
            scaling features for better model performance.
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

export default Course3Page1;