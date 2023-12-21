import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/1/5.png";
import secondImage from "../images/1/6.png";
import thirdImage from "../images/1/7.png";
import fourthImage from "../images/1/8.png";

const Course1Page4 = () => {
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
          <Card.Title>Module 4: Integration and Advanced Topics</Card.Title>

          <Card.Text>
            <strong>4.1 Integrating Microsoft BI Tools</strong>
            <br />
            Learn how to integrate various Microsoft BI tools to create a
            comprehensive and streamlined business intelligence solution.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.2 Power BI Integration with SSAS</strong>
            <br />
            Explore the integration capabilities of Power BI with SQL Server
            Analysis Services (SSAS) for enhanced data analysis and
            visualization.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.3 Advanced Reporting in SSRS</strong>
            <br />
            Dive into advanced reporting techniques using SQL Server Reporting
            Services (SSRS) to create sophisticated and insightful reports.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.4 Real-time BI and Emerging Trends</strong>
            <br />
            Explore real-time business intelligence solutions and stay updated on emerging trends in the field to remain competitive in the ever-evolving landscape.
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

export default Course1Page4;