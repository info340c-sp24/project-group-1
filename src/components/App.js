import React from 'react';
import Header from './Header.js'; 
import Footer from './Footer.js';
import CoursePage from './CoursePage.js';

function App() {
  return (
    <div className="container">
      <Header />
      <CoursePage code="INFO 340" />
      <Footer />
    </div>
    
  );
}

export default App;
