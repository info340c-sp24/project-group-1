import React from 'react';
import Header from './Header.js'; // Assuming the Header component is located in a folder called 'components'

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="author" content="Asad Jaffrey" />
        <meta name="author" content="Mason Koh" />
        <meta name="author" content="Shammu Meyyappan" />
        <title>iPlanner</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/project-styling.css" />
        <link rel="icon" type="image/png" href="img/iSchool_logo.png" />
        <meta
          name="description"
          content="A comprehensive course search, degree audit and planner specific to the iSchool."
        />
      </head>
      <body>
        <header>
          {/* Navbar */}
          <nav>
            <ul>
              <li>
                <img src="img/iSchool_logo.png" alt="iSchool logo" />
              </li>
              <li>
                <input name="search" type="search" placeholder="Search" id="search_bar" />
                <button type="button">Filter</button>
              </li>
              <li className="login">
                <a href="login.html">Sign in</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="index-container">
          <div className="index-column">
            <h2>Autumn 2024</h2>
            <div className="index-box">
              <h3>CSE 122</h3>
              <p>Introduction to Computer Programming II</p>
            </div>
            <div className="index-box">
              <h3>INFO 380</h3>
              <p>Product and Information Systems Management</p>
            </div>
            <div className="index-box">
              <h3>INFO 300</h3>
              <p>Research Methods</p>
            </div>
          </div>
          <div className="index-column">
            <h2>Winter 2025</h2>
            <div className="index-box">
              <h3>INFO 330</h3>
              <p>Databases and Data Modeling</p>
            </div>
            <div className="index-box">
              <h3>CSE 123</h3>
              <p>Introduction to Computer Programming III</p>
            </div>
            <div className="index-box">
              <h3>INFO 360</h3>
              <p>Design Methods</p>
            </div>
          </div>
          <div className="index-column">
            <h2>Spring 2025</h2>
            <div className="index-box">
              <h3>
                <a href="course-page.html">INFO 340</a>
              </h3>
              <p>Client-Side Development</p>
            </div>
            <div className="index-box">
              <h3>INFO 351</h3>
              <p>Information Ethics and Policy</p>
            </div>
            <div className="index-box">
              <h3>CSE 373</h3>
              <p>Data Structures and Algorithms</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
