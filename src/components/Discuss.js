import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";
import axios from "axios";
import {UserDataContext} from '../contexts/UserDataContext';
import { UserContext } from "../contexts/UserContext";

function Discuss() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState(""); // State to store the new question text

  const navigate = useNavigate();
  const { loggedInUserData } = useContext(UserDataContext);
  const { isLoggedIn } = useContext(UserContext);

  const margin = {
    marginTop: "100px",
  };

  useEffect(() => {
    fetchQuestions(); // Fetch questions when the component mounts
  }, []);

  useEffect(()=>{
    
  },[questions])

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "https://merd-api.merakilearn.org/hackathonCourses/GET_ALL_QUESTIONS"
      );
     
      setQuestions(response.data.data || []);
    } catch (error) {
      console.error(error);
      // Handle error state or display a message to the user
    }
  };

  const handleQuestionChange = (e) => {
    setNewQuestion(e.target.value); // Update the new question text
  };

  const handlePostQuestion = async () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      try {
        const response = await axios.post(
          'https://merd-api.merakilearn.org/hackathonCourses/ASK_QUESTIONS',
          {
            questions: newQuestion,
            email: loggedInUserData.email,
          }
        );
        
        // After successful post, update the state with the new question
        setQuestions([...questions, response.data.data.questions]); // Assuming the response.data contains the newly posted question object
        setNewQuestion(""); // Clear the input field after posting
      } catch (error) {
        console.error(error);
        // Handle error state or display a message to the user
      }
    }
  };
  

  return (
    <Container style={margin}>
      <header>
        <h1>Welcome to the Discussion Platform</h1>
      </header>

      <div>
          <div>
            <div>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your question..."
                value={newQuestion}
                onChange={handleQuestionChange}
                className="mb-3"
              />
              <div className="mb-3">
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={handlePostQuestion}
                >
                  Post Question
                </Button>
              </div>
            </div>
          </div>

        <h2>Q&A Discussions</h2>
        {questions.length > 0 ? (
          questions.map((question) => (
            <Link
              key={question.id}
              to={`/questions/${question.id}`}
              className="text-decoration-none"
            >
              <Card className="mb-3 clickable-box">
                <Card.Body>
                  <Card.Title>{question.questions}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))
        ) : (
          <p>No Questions Available</p>
        )}
      </div>
    </Container>
  );
}

export default Discuss;
