import React, { useState, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import {UserDataContext} from '../contexts/UserDataContext';
import { UserContext } from "../contexts/UserContext";



export const AnswerForum = () => {
  const [answer, setAnswer] = useState('');
  const { id } = useParams();
  const { loggedInUserData } = useContext(UserDataContext);
  const { isLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isLoggedIn){
      navigate("/login");
    }
    else{
      const data = {
        question_id: id,
        answers: answer,
        email: loggedInUserData.email,
      };
  
      try {
        const response = await fetch('https://merd-api.merakilearn.org/hackathonCourses/SUBMIT_ANSWER', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          console.log('Answer submitted:', answer);
          setAnswer('');
          // Optionally, you can handle success here
        } else {
          // Handle error cases
          console.error('Failed to submit answer:', response.status);
        }
      } catch (error) {
        console.error('Error submitting answer:', error);
      }
    };
    }

    


  return (
    <Container className='mt-5 mb-5'>
      <h2>Provide an Answer</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="answerTextArea" className='mb-2'>
          <Form.Control
            as="textarea"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer here"
            rows={4}
            cols={50}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isLoggedIn ? 'Post Answer' : 'Login to Post Answer'}
        </Button>
      </Form>
    </Container>
  );
};
