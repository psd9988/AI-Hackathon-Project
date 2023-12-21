import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/1/1.jpg";
import secondImage from "../images/1/2.png";
import thirdImage from "../images/1/3.png";
import fourthImage from "../images/1/4.png";

const Course1Page3 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course1Page4");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 3: Power BI Fundamentals</Card.Title>

          <Card.Text>
            <strong>3.1 Introduction to Power BI</strong>
            <br />
            Power BI is a business analytics service provided by Microsoft that
            allows you to visualize and share insights from your organization's
            data.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.2 Power BI Desktop and Power BI Service</strong>
            <br />
            Power BI consists of two main components: Power BI Desktop (for
            creating reports and dashboards) and Power BI Service (for sharing
            and collaborating on reports).
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.3 Connecting to Data Sources</strong>
            <br />
            Power BI allows you to connect to various data sources, including
            databases, Excel files, and online services, to gather and analyze
            data.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>3.4 Building Interactive Dashboards</strong>
            <br />
            Create interactive and visually appealing dashboards in Power BI to
            convey insights and trends effectively to your audience.
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
          <Button variant="primary" onClick={nextButton}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Course1Page3;