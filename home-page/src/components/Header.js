import React from 'react';
import logo from '../assets/images/ic.jpg'; 
import '../styles/Header.css';

const Header = () => {
    return (
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contatos</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;