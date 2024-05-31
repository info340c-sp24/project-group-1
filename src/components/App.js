import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Search from './Search.js';
import CoursePage from './CoursePage.js';
import Planner from './Planner.js';
import Login from './login.js';
import CreateAccount from './Create-account.js';
import { auth } from './FirebaseConfig';
import '../css/project-styling.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create account" element={<CreateAccount />} />
          <Route path="/courses/:code" element={<CoursePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;