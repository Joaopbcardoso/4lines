import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Itens() {
  const [valorLabel, setValorLabel] = useState('VALOR');

  const handleValorClick = () => {
    setValorLabel((prevLabel) => (prevLabel === 'VALOR↓' ? 'VALOR↑' : 'VALOR↓'));
  };

  const [relLabel, setRelLabel] = useState('REL↓');

  const handleRelClick = () => {
    setRelLabel((prevLabel) => (prevLabel === 'REL↓' ? 'REL↑' : 'REL↓'));
  };
  const [timeLabel, setTimeLabel] = useState('Futebol');

  const handleTimeClick = () => {
    setTimeLabel((prevLabel) => (prevLabel === 'Futebol' ? 'Basquete' : 'Futebol'));
  };

  return (
    <>
    <section className="Filtros">
      <button id="toggleButtonTime" onClick={handleTimeClick}>{timeLabel}</button>
      <button id="toggleButtonValor" onClick={handleValorClick}>{valorLabel}</button>
      <button id="toggleButtonRel" onClick={handleRelClick}>{relLabel}</button>
    </section>
    <section className='Galeria-produtos'>
            <button><img src="./fotos-produtos/1.png"/></button>

            <img src="./fotos-produtos/2.png"/>
            <img src="./fotos-produtos/3.png"/>
            <img src="./fotos-produtos/4.png"/>
            <img src="./fotos-produtos/5.png"/>
            <img src="./fotos-produtos/6.png"/>
            <img src="./fotos-produtos/7.png"/>
            <img src="./fotos-produtos/8.png"/>
    </section>
    </>
  );
}
