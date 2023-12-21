import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CourseList from "./CourseList";
import { UserDataContext } from "../contexts/UserDataContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { loggedInUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isCourseStarted, setIsCourseStarted] = useState(false);

  // Declare enrollInCourse function
  const enrollInCourse = async (courseId) => {
    try {
      // Check if the user is logged in
      if (!isLoggedIn) {
        // If not logged in, show a toast
        toast.error("Please log in first to enroll.");
        navigate("/login");
        return;
      }

      // Make the API call to enroll in the course
      const response = await axios.post(
        `https://merd-api.merakilearn.org//hackathonCourses/ENROLL/${courseId}`,
        {
          email: loggedInUserData.email,
        }
      );

      // Handle the API response
      console.log(response.data.message);

      // Show a toast notification based on the API response
      toast.success(response.data.message);

      // You may want to update your UI or state based on the response
    } catch (error) {
      // Handle errors
      console.error("API Error:", error);
      // Show an error toast notification
      toast.error("Failed to enroll in the course");
    }
  };

  const handleStartCourse = (courseId) => {
    const progress = parseInt(isCourseEnrolled(courseId).progress);

    if (progress === 0) {
      // If progress is 0, redirect to course page
      // course1page1
      navigate(`/course${courseId}page1`);
    }
    if (progress === 25) {
      // If progress is 25, redirect to course page
      navigate(`/course${courseId}page2`);
    }
    if (progress === 50) {
      // If progress is 50, redirect to course page
      navigate(`/course${courseId}page3`);
    }
    if (progress === 75) {
      // If progress is 75, redirect to course page
      navigate(`/course${courseId}page4`);
    }
  

  };

  useEffect(() => {
    if (isLoggedIn) {
      // Make the API call to get enrolled courses
      axios
        .get(
          `https://merd-api.merakilearn.org/hackathonCourses/GET_ENROLLED_COURSES/${loggedInUserData.email}`
        )
        .then((response) => {
          // Update the state with enrolled courses data
          setEnrolledCourses(response.data.data);

        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    }
  }, [isLoggedIn, loggedInUserData.email, enrolledCourses, isCourseStarted]);

  const containerStyle = {
    marginTop: "8rem",
  };

  const courses = CourseList();

  const isCourseEnrolled = (courseId) => {
    // Check if the courseId is present in the enrolledCourses array
    return enrolledCourses.find((course) => course.course_id === courseId);
  };

  
    useEffect(() => {
      if (isLoggedIn) {
        // Make the API call to get enrolled courses
        axios
          .get(
            `https://merd-api.merakilearn.org/hackathonCourses/GET_ENROLLED_COURSES/${loggedInUserData.email}`
          )
          .then((response) => {
            // Update the state with enrolled courses data
            setEnrolledCourses(response.data.data);
            // Check if any course is started
          })
          .catch((error) => {
            console.error("API Error:", error);
          });
      }
    }, [isLoggedIn, loggedInUserData.email]);
  
  
    return (
      <Container style={containerStyle}>
        <Row>
          {courses.map((course) => (
            
            <Col key={course.id} lg={3} md={6} sm={12} className="mb-4">
              <Card>
                <Card.Img variant="top" src={course.imageUrl} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{course.title}</Card.Title>
                  {/* Update the href attribute to include the course ID */}
                  <Button
                    id={course.id}
                    variant={isCourseEnrolled(course.id) && isLoggedIn ? "success" : "primary"}
                    onClick={() => enrollInCourse(course.id)}
                    disabled={isCourseEnrolled(course.id) && isLoggedIn} 
                    className="mb-2"
                  >
                    {isCourseEnrolled(course.id) && isLoggedIn ? "Enrolled" : "Enroll"}
                  </Button>
  
                  {isCourseEnrolled(course.id) && isLoggedIn && (
                    <Button
                      id={`start-${course.id}`}
                      variant="info" // Set the variant for the "Start" button
                      className="ml-auto" // Add margin to separate the buttons
                      onClick={() => handleStartCourse(course.id)}
                    >
                       {parseInt(isCourseEnrolled(course.id).progress) > 0 ? 'Resume' : 'Start'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* ToastContainer for displaying toast notifications */}
        <ToastContainer />
      </Container>
    );
  };
  
  export default HomePage;