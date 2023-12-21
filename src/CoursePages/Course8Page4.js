import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/8/10.jpg";
import secondImage from "../images/8/11.jpg";
import thirdImage from "../images/8/12.jpg";
import fourthImage from "../images/8/13.jpg";

const Course8Page4 = () => {
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
            Module 4: Building Responsive and Accessible Websites
          </Card.Title>

          <Card.Text>
            <strong>4.1: Flexbox and Grid Layouts</strong>
            <br />
            Dive deeper into layout options by mastering Flexbox and Grid
            layouts in CSS. Understand how to create flexible and responsive
            page structures.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.2: Responsive Images and Media Queries</strong>
            <br />
            Explore techniques for optimizing images for different devices and
            resolutions. Implement media queries to adapt styles based on the
            characteristics of the user's device.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.3: Web Accessibility Best Practices</strong>
            <br />
            Learn the principles of web accessibility and best practices for
            ensuring your websites are inclusive and usable for all users,
            including those with disabilities.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>4.4: Final Project: Responsive Website</strong>
            <br />
            Apply the skills acquired throughout the course by building a final
            project—a responsive website. Implement HTML and CSS techniques to
            create a visually appealing and accessible web page. Engage in peer
            review and feedback to refine your project.
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

export default Course8Page4;