import React from 'react';
import {Link } from 'react-router-dom';
import '../css/project-styling.css';


function Header() {
  return (
    <html>
      <header>
        <nav>
          <ul>
            <li>
              <div className="appName">
                <Link to="/search">
                <img src="./img/iSchool_logo.png" alt="iSchool logo" />
                Planner
                </Link>
                </div>
            </li>  
            <li><Link to="/planner">Planner</Link></li>
            <li><Link to="/login">Sign in</Link></li>
          </ul>
        </nav>
      </header>

    </html>
    
  );
}

export default Header;
