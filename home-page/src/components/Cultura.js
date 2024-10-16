import React from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import '../styles/Cultura.css';

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
        </div>
        <div className="cultura-imagem">
          <img src="../assets/images/trabalho-em-equipe.jpg" alt="Trabalho em equipe" />
        </div>
      </div>
      <Button variant="contained" color="primary" className="botao-sobre-nos">
        Sobre Nós
      </Button>
    </section>
  );
}

export default Cultura;
