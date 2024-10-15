import React from 'react';
import logo from '../assets/images/logo.svg'; 
import '../styles/Header.css';

const Header = () => {
    return (
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Expertise</a></li>
            <li><a href="#">Insights</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
