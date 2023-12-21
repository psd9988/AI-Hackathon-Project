import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export const AskQuestionForum = ({  }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Question submitted:', question);
    setQuestion('');
  };

  const handleCancel = () => {
    setQuestion('');
    window.location.href = '/discuss';
  };


  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
        <h2>Ask a Question</h2>
        <Form.Group>
          <Form.Label htmlFor="questionTextarea">Enter your question here</Form.Label>
          <Form.Control
            as="textarea"
            id="questionTextarea"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="4"
          />
        </Form.Group>
        <Row className="justify-content-center mt-2">
          <Col>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>{' '}
            <Button variant="primary" type="submit">
              Post Question
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
