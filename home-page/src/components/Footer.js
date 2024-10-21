import React from 'react';
import logo from '../assets/images/ic.jpg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="footer-header">
        <img src={logo} className="footer-logo" />
        {/* <p className="footer-description">Entidade focada em trazer tecnologia e inovação para a comunidade.</p> */}
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Mapa do site</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/eventos">Eventos</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Mais Informações</h4>
          <ul>
            <li><a href="/processo-seletivo">Processo Seletivo</a></li>
            <li><a href="/iniciativas">Nossas Iniciativas</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024, Entidade Estudantil. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
