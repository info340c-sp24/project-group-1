import React from 'react';
import Header from './Header.js'; 
import Footer from './Footer.js';
import CoursePage from './CoursePage.js';
import Search from './Search.js';
import '../css/project-styling.css';

function App() {
  return (
    <div className="container">
      <Header />
        <Search />
       <Footer />
    </div>

  );
}

export default App;
