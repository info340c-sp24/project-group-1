import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Search from './Search.js';
import CoursePage from './CoursePage.js';
import Planner from './Planner.js';
import Login from './Login.js';
import CreateAccount from './Create-account.js';
import '../css/project-styling.css';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap';
document.head.appendChild(link);

const initialPlannerData = {
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Autumn 2024',
      courseIds: [],
    },
    'column-2': {
      id: 'column-2',
      title: 'Winter 2025',
      courseIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Spring 2025',
      courseIds: [],
    },
  },
  courses: {},
};

function App() {
  const [plannerData, setPlannerData] = useState(initialPlannerData);

  const addCourseToPlanner = (course) => {
    setPlannerData((prevData) => {
      if (Object.values(prevData.courses).some((c) => c.code === course.code)) {
        return prevData; // Don't add if course already exists
      }

      const newCourses = {
        ...prevData.courses,
        [course.code]: { id: course.code, ...course },
      };

      const newColumn = {
        ...prevData.columns['column-1'],
        courseIds: [...prevData.columns['column-1'].courseIds, course.code],
      };

      return {
        ...prevData,
        courses: newCourses,
        columns: {
          ...prevData.columns,
          'column-1': newColumn,
        },
      };
    });
  };

  const updatePlannerData = (newData) => {
    setPlannerData(newData);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Search addCourseToPlanner={addCourseToPlanner} />} />
          <Route path="/search" element={<Search addCourseToPlanner={addCourseToPlanner} />} />
          <Route path="/planner" element={<Planner plannerData={plannerData} updatePlannerData={updatePlannerData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/courses/:code" element={<CoursePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
