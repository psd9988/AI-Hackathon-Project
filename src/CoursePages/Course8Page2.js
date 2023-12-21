import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/8/4.jpg";
import secondImage from "../images/8/5.jpg";
import thirdImage from "../images/8/6.jpg";

const Course8Page2 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course8Page3");
  };

  const containerStyle = {
    margin: "6rem auto",
    maxWidth: "800px",
  };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 2: Styling with CSS</Card.Title>

          <Card.Text>
            <strong>2.1: Introduction to CSS</strong>
            <br />
            Understand the basics of CSS (Cascading Style Sheets), including
            selectors, properties, and values. Explore how CSS is used to style
            and format HTML content.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.2: Box Model and Layouts</strong>
            <br />
            Delve into the CSS box model, understanding how elements are
            rendered on the web page. Explore layout techniques, including
            positioning, floating, and Flexbox.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.3: Responsive Web Design with CSS</strong>
            <br />
            Learn the principles of responsive web design, including CSS media
            queries and fluid grids. Create websites that adapt to different
            screen sizes and devices.
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

export default Course8Page2;