import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import '../styles/Valores.css';
import StarIcon from '@mui/icons-material/Star';  
import ShareIcon from '@mui/icons-material/Share';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ForumIcon from '@mui/icons-material/Forum';
import SchoolIcon from '@mui/icons-material/School';

function Valores() {
    const valores = [
      { title: 'Colaboração', text: 'Trabalhar em equipe para alcançar objetivos comuns.', icon: <ShareIcon /> },
      { title: 'Proatividade', text: 'Tomar a iniciativa de resolver problemas e agir rapidamente.', icon: <AutoFixHighIcon /> },
      { title: 'Excelência', text: 'Buscar a perfeição e oferecer sempre o melhor.', icon: <StarIcon /> },
      { title: 'Comunicação', text: 'Garantir clareza e transparência em todas as interações.', icon: <ForumIcon /> },
      { title: 'Aprendizado contínuo', text: 'Evoluir constantemente por meio de novas experiências.', icon: <SchoolIcon /> }
    ];
  
    const [flipped, setFlipped] = useState(Array(valores.length).fill(false));
  
    const handleFlip = (index) => {
      const newFlipped = [...flipped];
      newFlipped[index] = !newFlipped[index];
      setFlipped(newFlipped);
    };
  
    return (
      <section className="valores-section">
        <Divider textAlign="center" style={{ margin: '40px 0', fontSize: '26px' }}>
          Missões e Valores
        </Divider>
        <div className="valores-content">
          <div className="valores-text">
            <p className="missao-text">
              Temos como missão tornar a tecnologia mais acessível e desenvolver projetos que agregam valor para a comunidade.
            </p>
          </div>
        </div>
        <div className="valores-blabla">
          <h2>Nossos Valores</h2>
          <div className="valores-cards">
            {valores.map((valor, index) => (
              <div
                key={index}
                className={`valor-card ${flipped[index] ? 'flipped' : ''}`}
                onClick={() => handleFlip(index)}
              >
                <div className="card-front">
                  <h3>{valor.title}</h3>
                  <div className="icon-wrapper">{valor.icon}</div>
                </div>
                <div className="card-back">
                  <p>{valor.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
export default Valores;
