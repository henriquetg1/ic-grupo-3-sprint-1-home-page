import React from 'react';
import '../styles/Contato.css';

function Contact() {
    return (
      <div className="contact-container">
        <div className="nav-breadcrumb">
          <a href="/" className="home-link">⌂</a>
          <span>/</span>
          <span>Contato</span>
        </div>
        
        <div className="contact-content">
          <div className="contact-heading">
            <h1>Vamos Falar Sobre<br/>Seu Próximo<br/>Grande Projeto</h1>
          </div>
  
          <div className="form-container">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Primeiro nome <span className="required">*</span></label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Sobrenome <span className="required">*</span></label>
                  <input type="text" required />
                </div>
              </div>
  
              <div className="form-group">
                <label>Email <span className="required">*</span></label>
                <input type="email" required />
              </div>
  
              <div className="form-row">
                <div className="form-group">
                  <label>Telefone <span className="required">*</span></label>
                  <input type="tel" required />
                </div>
                <div className="form-group">
                  <label>Cargo <span className="required">*</span></label>
                  <input type="text" required />
                </div>
              </div>
  
              <div className="form-group">
                <label>Nome da empresa <span className="required">*</span></label>
                <input type="text" required />
              </div>
  
              <div className="form-group">
                <label>Como podemos ajudar? <span className="required">*</span></label>
                <textarea rows="4" required></textarea>
              </div>
  
              <button type="submit" className="submit-button">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;