import React from 'react';
import Divider from '@mui/material/Divider';
import '../styles/Case.css';
import img1 from '../assets/images/case1.jpg';
import img2 from '../assets/images/case2.jpeg';
import img3 from '../assets/images/case3.jpg';

function Case() {
  return (
    <section className="case-section">
      <Divider textAlign="center" style={{ margin: '40px 0', fontSize: '26px' }}>
        Cases de Sucesso
      </Divider>
      <h1 className="case-titulo">Nosso Trabalho</h1>
      <div className="case-content">
        <div className="case-text">
          <p>Já atuamos em uma ampla variedade de projetos, desenvolvendo soluções inovadoras e personalizadas para atender às necessidades específicas de cada projeto. Confira abaixo alguns dos projetos que já fizemos!</p>
        </div>

        {/* Primeira Imagem Grande */}
        <div className="case-card-large">
          <div className="case-imagem">
            <img src={img1} alt="Trabalho em equipe" />
            <button className="read-button">Sobre</button>
          </div>
          <div className="case-details">
            <h3>Nome do Projeto</h3>
            <p>Breve descrição do projeto destacando os principais aspectos e resultados alcançados.</p>
          </div>
        </div>

        {/* Duas Imagens Menores */}
        <div className="case-grid-small">
          <div className="case-card">
            <div className="case-imagem">
              <img src={img2} alt="Novo Projeto 1" />
              <button className="read-button">Sobre</button>
            </div>
            <div className="case-details">
              <h3>Nome do Novo Projeto 1</h3>
              <p>Breve descrição do projeto destacando os principais aspectos e resultados alcançados.</p>
            </div>
          </div>
          <div className="case-card">
            <div className="case-imagem">
              <img src={img3} alt="Novo Projeto 2" />
              <button className="read-button">Sobre</button>
            </div>
            <div className="case-details">
              <h3>Nome do Novo Projeto 2</h3>
              <p>Breve descrição do projeto destacando os principais aspectos e resultados alcançados.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Case;
