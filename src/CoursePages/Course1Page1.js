import React, { useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import firstImage from "../images/1/1.jpg";
import secondImage from "../images/1/2.png";
import thirdImage from "../images/1/3.png";
import fourthImage from "../images/1/4.png";
import axios from "axios";
import { UserDataContext } from "../contexts/UserDataContext";

const Course1Page1 = () => {
    const navigate = useNavigate();

    const location = useLocation();

   const { loggedInUserData } = useContext(UserDataContext);




    const nextButton = () => {
      const pathParts = location.pathname.split('/');
      const courseId = pathParts[1];
      const courseNumber = courseId.replace('course', '')
      console.log(courseNumber[0]);

      axios.post(`https://merd-api.merakilearn.org/hackathonCourses/UPDATE_PROGRESS/${courseNumber[0]}`, {
        email: loggedInUserData.email,
        exercise_id: 1,
      }).then((response) => {
        console.log(response);
      }
      ).catch((error) => {
        console.log(error);
      })

      navigate("/course1page2");
    };

    const containerStyle = {
      margin: "6rem auto",
      maxWidth: "800px",
    };
  return (
    <Container style={containerStyle}>
      <Card>
        <Card.Body>
          <Card.Title>Module 1: Introduction to Microsoft BI Stack</Card.Title>

          <Card.Text>
            <strong>1.1 Overview of Business Intelligence</strong>
            <br />
            Business Intelligence (BI) involves the use of technologies,
            processes, and tools to help organizations make informed business
            decisions.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.2 Introduction to Microsoft BI Tools</strong>
            <br />
            Microsoft offers a suite of BI tools designed to empower users in
            analyzing and visualizing data effectively.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.3 Components of Microsoft BI Stack</strong>
            <br />
            The Microsoft BI Stack comprises various components, including SQL
            Server, Power BI, and more, each serving a specific purpose in the
            BI process.
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>1.4 Choosing the Right Tool for the Task</strong>
            <br />
            Selecting the appropriate Microsoft BI tool depends on factors such
            as data complexity, analysis requirements, and user preferences.
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

export default Course1Page1;