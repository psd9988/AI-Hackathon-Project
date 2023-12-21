import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {AnswerForum} from './AnswerForum';

function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  const margin = {
    marginTop:"8rem", // Set your desired color here
  };

  useEffect(() => {
    // Mock question data for demonstration
    const mockQuestion = { id: 1, title: 'Sample Question', content: 'Sample content for the question' };
    setQuestion(mockQuestion);

    // Mock answers data for demonstration
    const mockAnswers = [
      { id: 1, content: 'Sample answer 1' },
      { id: 2, content: 'Sample answer 2' },
    ];
    setAnswers(mockAnswers);
  }, [id]);

  return (
    <Container className='question-detail-container' style={margin}>
      {question && (
        <Card>
          <Card.Body>
            <Card.Title>{question.title}</Card.Title>
            <Card.Text>{question.content}</Card.Text>
          </Card.Body>
        </Card>
      )}
      <AnswerForum />
      <div className='answers-container mt-2'>
        <h3>Answers</h3>
        {answers.map((answer) => (
          <Card key={answer.id} className='mb-3'>
            <Card.Body>
              <Card.Text>{answer.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default QuestionDetail;
