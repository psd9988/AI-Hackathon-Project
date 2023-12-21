import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"; // Import Form from react-bootstrap

function Discuss() {
  const [questions, setQuestions] = useState([]);
  const [isAsking, setIsAsking] = useState(false); // State to toggle the input field display
  const [newQuestion, setNewQuestion] = useState(""); // State to store the new question text

  const margin = {
    marginTop: "100px",
  };

  useEffect(() => {
    // Mock data for demonstration
    const mockData = [
      { id: 1, title: "Sample Question 1" },
      { id: 2, title: "Sample Question 2" },
      { id: 3, title: "Sample Question 3" },
      { id: 4, title: "Sample Question 4" },
    ];
    setQuestions(mockData);
  }, []);

  const handleAskClick = () => {
    setIsAsking(!isAsking); // Toggle the display of input field and button
  };

  const handleQuestionChange = (e) => {
    setNewQuestion(e.target.value); // Update the new question text
  };

  const handlePostQuestion = () => {
    // Logic to handle posting the question to the backend/API
    // For demonstration, you can add the new question to the existing list
    const updatedQuestions = [
      ...questions,
      { id: questions.length + 1, title: newQuestion },
    ];
    setQuestions(updatedQuestions);
    setIsAsking(false); // Hide the input field and button after posting
    setNewQuestion(""); // Clear the input field
  };

  return (
    <Container style={margin}>
      <header>
        <h1>Welcome to the Discussion Platform</h1>
      </header>

      <div>
        {!isAsking ? ( // Display "Ask a Question" button when not in ask mode
          <Button variant="success" className="mb-3" onClick={handleAskClick}>
            Ask a Question
          </Button>
        ) : (
          // Display input field and "Post Question" button when in ask mode
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
                <Button
                  variant="danger"
                  onClick={handleAskClick}
                  className="mx-2"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        <h2>Q&A Discussions</h2>
        {questions.map((question) => (
          <Link
            key={question.id}
            to={`/questions/${question.id}`}
            className="text-decoration-none"
          >
            <Card className="mb-3 clickable-box">
              <Card.Body>
                <Card.Title>{question.title}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Discuss;
