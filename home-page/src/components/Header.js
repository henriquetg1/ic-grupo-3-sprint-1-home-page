import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/ic.jpg'; 
import '../styles/Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const headerRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const gradient = gradientRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { offsetLeft, offsetTop } = header;
      const x = clientX - offsetLeft;
      const y = clientY - offsetTop;
      gradient.style.setProperty('--x', `${x}px`);
      gradient.style.setProperty('--y', `${y}px`);
    };

    header.addEventListener('mousemove', handleMouseMove);

    return () => {
      header.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header" ref={headerRef}>
      <img src={logo} alt="InsperCoding" className="logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#" className={activeLink === 'Home' ? 'active' : ''} onClick={() => handleNavClick('Home')}>Home</a></li>
          <li><a href="#" className={activeLink === 'Serviços' ? 'active' : ''} onClick={() => handleNavClick('Serviços')}>Serviços</a></li>
          <li><a href="#" className={activeLink === 'Projetos' ? 'active' : ''} onClick={() => handleNavClick('Projetos')}>Projetos</a></li>
          <li><a href="#" className={activeLink === 'Sobre' ? 'active' : ''} onClick={() => handleNavClick('Sobre')}>Sobre</a></li>
          <li><a href="#" className={activeLink === 'Contato' ? 'active' : ''} onClick={() => handleNavClick('Contato')}>Contato</a></li>
        </ul>
      </nav>
      <div className="header-hover-effect">
        <div className="header-hover-effect-gradient" ref={gradientRef}></div>
      </div>
    </header>
  );
};

export default Header;