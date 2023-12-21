import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import LoginPage from './components/LoginPage';
// import IfLoggedIn from './components/IfLoggedIn'
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import Discuss from './components/Discuss';
import QuestionDetail from './components/QuestionDetail';
import {AskQuestionForum} from './components/AskQuestionForum';
import Course1Page1 from './CoursePages/Course1Page1';
import Course1Page2 from './CoursePages/Course1Page2';
import Course1Page3 from './CoursePages/Course1Page3';
import Course1Page4 from './CoursePages/Course1Page4';
import Course2Page1 from './CoursePages/Course2Page1';
import Course2Page2 from './CoursePages/Course2Page2';
import Course2Page3 from './CoursePages/Course2Page3';
import Course2Page4 from './CoursePages/Course2Page4';
import Course3Page1 from './CoursePages/Course3Page1';
import Course3Page2 from './CoursePages/Course3Page2';
import Course3Page3 from './CoursePages/Course3Page3';
import Course3Page4 from './CoursePages/Course3Page4';
import Course4Page1 from './CoursePages/Course4Page1';
import Course4Page2 from './CoursePages/Course4Page2';
import Course4Page3 from './CoursePages/Course4Page3';
import Course4Page4 from './CoursePages/Course4Page4';
import Course5Page1 from './CoursePages/Course5Page1';
import Course5Page2 from './CoursePages/Course5Page2';
import Course5Page3 from './CoursePages/Course5Page3';
import Course5Page4 from './CoursePages/Course5Page4';
import Course6Page1 from './CoursePages/Course6Page1';
import Course6Page2 from './CoursePages/Course6Page2';
import Course6Page3 from './CoursePages/Course6Page3';
import Course6Page4 from './CoursePages/Course6Page4';
import Course7Page1 from './CoursePages/Course7Page1';
import Course7Page2 from './CoursePages/Course7Page2';
import Course7Page3 from './CoursePages/Course7Page3';
import Course7Page4 from './CoursePages/Course7Page4';
import Course8Page1 from './CoursePages/Course8Page1';
import Course8Page2 from './CoursePages/Course8Page2';
import Course8Page3 from './CoursePages/Course8Page3';
import Course8Page4 from './CoursePages/Course8Page4';

import AiPlanner from './components/AiPlanner';




function App() {
  return (
    <div>
      <Header />
 
      <Routes>
      <Route path="/courses" element={<CourseList/>} />
      <Route path="/course/:id" element={<CourseDetail/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/discuss" element={<Discuss/>} />
      <Route path="/questions/:id" element={<QuestionDetail />} />
      {/* <Route path="/ask" element={<AskQuestionForum />} /> */}
      <Route path="/course1page1" element={<Course1Page1/>} />
      <Route path="/course1page2" element={<Course1Page2/>} />
      <Route path="/course1page3" element={<Course1Page3/>} />
      <Route path="/course1page4" element={<Course1Page4/>} />
      <Route path="/course2page1" element={<Course2Page1/>} />
      <Route path="/course2page2" element={<Course2Page2/>} />
      <Route path="/course2page3" element={<Course2Page3/>} />
      <Route path="/course2page4" element={<Course2Page4/>} />
      <Route path="/course3page1" element={<Course3Page1/>} />
      <Route path="/course3page2" element={<Course3Page2/>} />
      <Route path="/course3page3" element={<Course3Page3/>} />
      <Route path="/course3page4" element={<Course3Page4/>} />
      <Route path="/course4page1" element={<Course4Page1/>} />
      <Route path="/course4page2" element={<Course4Page2/>} />
      <Route path="/course4page3" element={<Course4Page3/>} />
      <Route path="/course4page4" element={<Course4Page4/>} />
      <Route path="/course5page1" element={<Course5Page1/>} />
      <Route path="/course5page2" element={<Course5Page2/>} />
      <Route path="/course5page3" element={<Course5Page3/>} />
      <Route path="/course5page4" element={<Course5Page4/>} />
      <Route path="/course6page1" element={<Course6Page1/>} />
      <Route path="/course6page2" element={<Course6Page2/>} />
      <Route path="/course6page3" element={<Course6Page3/>} />
      <Route path="/course6page4" element={<Course6Page4/>} />
      <Route path="/course7page1" element={<Course7Page1/>} />
      <Route path="/course7page2" element={<Course7Page2/>} />
      <Route path="/course7page3" element={<Course7Page3/>} />
      <Route path="/course7page4" element={<Course7Page4/>} />
      <Route path="/course8page1" element={<Course8Page1/>} />
      <Route path="/course8page2" element={<Course8Page2/>} />
      <Route path="/course8page3" element={<Course8Page3/>} />
      <Route path="/course8page4" element={<Course8Page4/>} />
      <Route path="/aiplanner" element={<AiPlanner/>} />
      </Routes>
    </div>
  );
}

export default App;
