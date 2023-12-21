import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firstImage from "../images/1/5.png";
import secondImage from "../images/1/6.png";
import thirdImage from "../images/1/7.png";
import fourthImage from "../images/1/8.png";

const Course1Page2 = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate("/Course1Page3");
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
            Module 2: SQL Server Integration Services (SSIS) and SQL Server
            Analysis Services (SSAS)
          </Card.Title>

          <Card.Text>
            <strong>2.1 Introduction to SSIS</strong>
            <br />
            SQL Server Integration Services (SSIS) is a Microsoft tool used for
            solving complex business problems by copying or downloading files,
            extracting and transforming data from different database sources,
            and loading data into one or multiple destinations.
          </Card.Text>

          <Card.Img
            src={firstImage}
            alt="BI Overview"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.2 ETL (Extract, Transform, Load) Process</strong>
            <br />
            The ETL process is a key component of SSIS, involving the extraction
            of data from source systems, transforming the data into a suitable
            format, and loading it into a target system or data warehouse.
          </Card.Text>

          <Card.Img
            src={secondImage}
            alt="Microsoft BI Tools"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.3 Creating SSIS Packages</strong>
            <br />
            SSIS packages are workflows created to solve specific business
            problems. These packages consist of a series of data flow and
            control flow elements
          </Card.Text>

          <Card.Img
            src={thirdImage}
            alt="BI Stack Components"
            className="mb-3"
          />

          <Card.Text>
            <strong>2.4 Introduction to SSAS</strong>
            <br />
            SQL Server Analysis Services (SSAS) is used for analyzing and
            visualizing data stored in SQL Server databases. It provides OLAP
            (Online Analytical Processing) and data mining functionalities.
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

export default Course1Page2;