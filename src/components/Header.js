import React from 'react';
import logo from '../img/iSchool_logo.png'; // imports logo
import '../css/project-styling.css';


function Header() {
  return (
    <header>
      {/* nav bar */}
      <nav>
        <ul>
          <li><img src={logo} alt="iSchool logo" /></li>
          <li><a href="index.html">Planner</a></li>
          <li><a href="search.html">Search</a></li>
          <li className="login"><a href="login.html">Sign in</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
