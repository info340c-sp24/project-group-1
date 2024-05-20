import React from 'react';
import {Link } from 'react-router-dom';
import '../css/project-styling.css';


function Header() {
  return (
    <html>
      <header>
        <nav>
          <ul>
            <li><img src="./img/iSchool_logo.png" alt="iSchool logo" /></li>
            <li><Link to="/planner">Planner</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/login">Sign in</Link></li>
          </ul>
        </nav>
      </header>

    </html>
    
  );
}

export default Header;
