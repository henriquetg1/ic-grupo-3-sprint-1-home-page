import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; 
import '../styles/PalavraImpacto.css';

const PalavraImpacto = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['produzindo', 'inovando', 'aprendendo', 'capacitando'], 
      typeSpeed: 50,   
      backSpeed: 50,   
      loop: true,      
      backDelay: 1500, 
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='main-content'>
      <div className='main-content__container'>
        <div className='palavras'>
          <h1>
            <span>Sempre </span>
            <span ref={typedElement}></span> {/* Aplicando o typed.js aqui */}
          </h1>
        </div>
          <p>O Insper Coding é uma entidade focada em...</p>
        <div class="buttons">
            <button class="btn-primary">Nosso Trabalho</button>
            <button class="btn-secondary">Contato</button>
        </div>
      </div>
    </div>
  );
};

export default PalavraImpacto;
