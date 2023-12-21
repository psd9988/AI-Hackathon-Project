import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/3/1.jpg";
import secondImage from "../images/3/2.jpg";
import thirdImage from "../images/3/3.png";

const Course3Page3 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course3Page4");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 3: Unsupervised Learning</Card.Title>

          <Card.Text>
            <strong>3.1: Clustering with k-Means</strong>
            <br />
            Explore unsupervised learning through clustering with k-Means,
            understanding the algorithm, and applying it to group data into
            clusters.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.2: Hierarchical and Density-Based Clustering</strong>
            <br />
            Extend your clustering knowledge with hierarchical and density-based
            clustering techniques, gaining insights into agglomerative
            hierarchical clustering and DBSCAN.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.3: Association Rule Learning</strong>
            <br />
            Discover association rule learning algorithms, like Apriori and
            Eclat, to uncover patterns in large datasets and make informed
            business decisions.
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

export default Course3Page3;