import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import LoginPage from './components/LoginPage';
import IfLoggedIn from './components/IfLoggedIn';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import Discuss from './components/Discuss';
import QuestionDetail from './components/QuestionDetail';
import {AskQuestionForum} from './components/AskQuestionForum';




function App() {
  return (
    <div>
      <Header />
      {/* <IfLoggedIn /> */}
      <Routes>
      <Route path="/courses" element={<CourseList/>} />
      <Route path="/course/:id" element={<CourseDetail/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/discuss" element={<Discuss/>} />
      <Route path="/questions/:id" element={<QuestionDetail />} />
      {/* <Route path="/ask" element={<AskQuestionForum />} /> */}
      </Routes>
     
    </div>
  );
}

export default App;
