import React from 'react';
import Divider from '@mui/material/Divider';
import '../styles/Cultura.css';
import img1 from '../assets/images/trabalho-em-equipe.jpg';

function Cultura() {
  return (
    <section className="cultura-section">
      <Divider textAlign="center" style={{ margin: '40px 0', fontSize: '26px' }}>
        Nossa Cultura
      </Divider>
      <div className="cultura-content">
        <div className="cultura-text">
          <h2>Frase sobre a entidade</h2>
          <p>Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é Insper Coding é </p>
          <button className="botao-sobre-nos">
            Sobre Nós
          </button>
        </div>
        <div className="cultura-imagem">
          <img src={img1} alt="Trabalho em equipe" />
        </div>
      </div>
    </section>
  );
}

export default Cultura;
