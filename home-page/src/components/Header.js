import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/ic.jpg'; 
import '../styles/Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);

  // Detect scroll direction for the nav bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledUp = prevScrollPos.current > currentScrollPos;

      setIsScrollingUp(isScrolledUp);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <img src={logo} alt="InsperCoding" className="logo" />
      <nav className={`nav ${isScrollingUp ? 'visible' : 'hidden'}`}>
        <ul className="nav-list">
          <li><a href="#" className={activeLink === 'Home' ? 'active' : ''} onClick={() => handleNavClick('Home')}>Home</a></li>
          <li><a href="#" className={activeLink === 'Serviços' ? 'active' : ''} onClick={() => handleNavClick('Serviços')}>Serviços</a></li>
          <li><a href="#" className={activeLink === 'Projetos' ? 'active' : ''} onClick={() => handleNavClick('Projetos')}>Projetos</a></li>
          <li><a href="#" className={activeLink === 'Sobre' ? 'active' : ''} onClick={() => handleNavClick('Sobre')}>Sobre</a></li>
          <li><a href="#" className={activeLink === 'Contato' ? 'active' : ''} onClick={() => handleNavClick('Contato')}>Contato</a></li>
        </ul>
      </nav>
      <div className="header-hover-effect">
        <div className="header-hover-effect-gradient"></div>
      </div>
    </header>
  );
};

export default Header;
