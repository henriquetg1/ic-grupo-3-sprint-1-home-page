import React from 'react';
import logo from '../assets/images/icteste.png';
import '../styles/Footer.css';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Linha separadora */}
      <div className="separator" />

      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src={logo} alt="IC Logo" className="footer-logo" />
          <div className="social-icons">
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-info-section">
          <div className="contact-section">
            <h3>Contato</h3>
            <ul>
              <li>suporte@inspercoding.com.br</li>
              <li>+55 11 99999-9999</li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="address-section">
            <h3>Endereço</h3>
            <p>Rua Quatá, 200 Vila Olímpia - São Paulo 04546-080</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/termos">Termos e Condições</a>
          <a href="/privacidade">Política de privacidade</a>
        </div>
        <p className="copyright">© 2024 Insper Coding. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
