import React from 'react';
import '../css/project-styling.css';


function Header() {
  return (
    <html>
      <header>
        <nav>
          <ul>
            <li><img src="../../public/img/iSchool_logo.png" alt="iSchool logo" /></li>
            <li><a href="index.html">Planner</a></li>
            <li><a href="search.html">Search</a></li>
            <li className="login"><a href="login.html">Sign in</a></li>
          </ul>
        </nav>
      </header>

    </html>
    
  );
}

export default Header;
