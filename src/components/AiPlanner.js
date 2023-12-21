import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import OpenAI from "openai";

function AiPlanner() {
  const [text, setText] = useState("");
  const [correctedText, setCorrectedText] = useState("");

  const margin = {
    marginTop: "8rem",
  };

  const apiKey = process.env.REACT_APP_API_KEY;

  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  const generatePlan = async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "Write a lesson plan for an introductory algebra class. The lesson plan should cover the distributive law, in particular how it works in simple cases involving mixes of positive and negative numbers. Come up with some examples that show common student errors.",
        },
      ],
      temperature: 0,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const returnText = response.choices[0].message.content;
    console.log(returnText);
    setCorrectedText(returnText);
  };

  const planLesson = (e) => {
    e.preventDefault();
    generatePlan();
  };

  return (
    <Container style={margin}>
      <div className="App">
        <h1>AI Lesson Planner</h1>
        <p>
          Plan with AI to create a lesson plan. AI will help you to create a
          lesson plan based on the topic you provide.
        </p>
        <Form>
          <Form.Group controlId="lessonText">
            <Form.Control
              as="textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="5"
              placeholder="Type or paste your text here..."
            />
          </Form.Group>
          <Button onClick={planLesson} className="mt-2">
            Plan Lesson
          </Button>
        </Form>
      </div>
      {correctedText && (
        <div className="mt-5">
          <h2>Result</h2>
          <pre>{correctedText}</pre>
        </div>
      )}
    </Container>
  );
}

export default AiPlanner;
