import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Search from './Search.js';
import CoursePage from './CoursePage.js';
import Planner from './Planner.js';
import '../css/project-styling.css';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap';
document.head.appendChild(link);

ReactDOM.render(
    <React.StrictMode>
        <Planner />
    </React.StrictMode>,
    document.getElementById('root')
);

function App() {
  return (
    <div className="container">
      <Header />
        <Planner />
       <Footer />
    </div>

  );
}

export default App;
