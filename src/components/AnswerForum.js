import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export const AnswerForum = () => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answer submitted:', answer);
    setAnswer('');
  };

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
          Post Answer
        </Button>
      </Form>
    </Container>
  );
};
