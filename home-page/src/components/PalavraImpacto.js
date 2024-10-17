import React, { useState, useEffect } from 'react';
import '../styles/PalavraImpacto.css';

const PalavraImpacto = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['produzindo', 'inovando', 'aprendendo', 'capacitando'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className='main-content'>
      <div className='main-content__container'>
        <div className='palavras'>
            <h1><span>Sempre</span> <span>{words[currentWordIndex]}</span></h1>
            <p>O Insper Coding é uma entidade focada em...</p>
        </div>
        <div className="buttons">
          <button className="btn-primary">Nosso Trabalho</button>
          <button className="btn-secondary">Contato</button>
        </div>
      </div>
    </div>
  );
};

export default PalavraImpacto;