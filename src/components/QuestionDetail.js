import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {AnswerForum} from './AnswerForum';
import axios from 'axios';

function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  const margin = {
    marginTop:"8rem", // Set your desired color here
  };

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        // Make an API call to get the answer details based on the ID
        const response = await axios.get(`https://merd-api.merakilearn.org/hackathonCourses/GET_ALL_ANSWERS/${id}`); 
        
        console.log(response.data.data);
        
        setQuestion(response.data.data[0]); 
        setAnswers(response.data.data[1].answers);
        
      } catch (error) {
        console.error(error);
        // Handle error state or display a message to the user
      }
    };

    fetchQuestion();
  }, [id]);

  console.log("answers", answers)

  return (
    <Container className='question-detail-container' style={margin}>
      {question && (
        <Card>
          <Card.Body>
            <Card.Title>{question.questions}</Card.Title>
            <Card.Text>{question.content}</Card.Text>
          </Card.Body>
        </Card>
      )}
      <AnswerForum />
      <div className='answers-container mt-2'>
        <h3>Answers</h3>
        {answers.length > 0 ? (
          answers.map((answer) => (
            <Card key={answer.id} className='mb-3'>
              <Card.Body>
                <Card.Text>{answer.answers}</Card.Text>
                <div className='d-flex justify-content-end'>
                  <small className='text-muted'>Answer By - {answer.email}</small>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-muted">No answers available. Be the first to answer!</p>
        )}
      </div>
    </Container>
  );
}

export default QuestionDetail;
