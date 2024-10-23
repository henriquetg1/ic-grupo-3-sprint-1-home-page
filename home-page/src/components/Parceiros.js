import React from "react";
import Divider from '@mui/material/Divider';
import '../styles/Parceiros.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importando as imagens
import fundacaoescolar from "../assets/images/fundacaoescolar.png";
import insperdata from "../assets/images/insperdata.png";
import insperdynamics from "../assets/images/insperdynamics.png";
import insperinhealth from "../assets/images/insperinhealth.png";
import inspersec from "../assets/images/inspersec.png";

const Parceiros = () => {
  const settings = {
    infinite: true,
    speed: 4500, // Velocidade da transição
    slidesToShow: 5, // Quantos logos são mostrados ao mesmo tempo
    slidesToScroll: 1, // Quantos logos deslizam por vez
    autoplay: true, // Carrossel automático
    autoplaySpeed: 0, // Isso garante que o loop é contínuo
    cssEase: "linear", // Efeito de transição linear
    pauseOnHover: false, // Não parar ao passar o mouse
    arrows: false, // Sem setas
  };

  const logos = [fundacaoescolar, insperdata, insperdynamics, insperinhealth, inspersec]; // Use as imagens importadas

  return (
    <section className="parceiros-section">
      <div className="parceiros">
        <Divider textAlign="center" style={{ margin: '40px 0', fontSize: '26px' }}>
          Nossos Parceiros
        </Divider>
        <h2 className="parceiros-titulo">Trabalhando Juntos para o Sucesso</h2>
        <div className="parceiros-text">
          <p>Estabelecemos parcerias estratégicas com outras entidades e empresas, criando uma rede colaborativa que nos permite entregar soluções inovadoras e impactantes para nossos projetos e membros.</p>
        </div>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index}>
              <div className="logo-box">
                <img
                  src={logo}
                  alt={`logo-${index}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Parceiros;
