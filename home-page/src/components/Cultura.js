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
      <h2 className="cultura-titulo">Desenvolvendo o Futuro da Tecnologia</h2> {/* Movei o h2 para fora da div cultura-content */}
      <div className="cultura-content">
        <div className="cultura-text">
          <p>No Insper Coding, capacitamos nossos membros para se tornarem desenvolvedores excepcionais, líderes inovadores e comunicadores eficazes. Através de projetos reais, colaboramos para criar soluções tecnológicas que fazem a diferença, preparando nossos membros para o mercado de trabalho e os desafios do futuro. </p>
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
