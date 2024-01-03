//index.js 

import { ButtonStyle, ContainerStars, Glow, Circle, Stars } from './styles';
import React, { useEffect, useRef } from 'react';

export const ButtonProjects = ({ label, type, onClick, onChange, color }) => {
  const containerStarsRef = useRef(null);

  useEffect(() => {
    console.log('useEffect triggered');
    const containerStars = containerStarsRef.current;
    containerStars.style.animation = 'none';
    // Forçar um reflow do navegador
    const offsetHeight = containerStars.offsetHeight; 
    containerStars.style.animation = '';
  }, []);

  return (
    <ButtonStyle
      type={type}
      onClick={onClick ? onClick : undefined}
      onChange={onChange ? onChange : undefined}
      color={color}
    >
      {label}
      <ContainerStars id="container-stars" ref={containerStarsRef}>
        <Stars id="stars"></Stars>
      </ContainerStars>
      <Glow id="glow">
        <Circle className="circle"></Circle>
        <Circle className="circle"></Circle>
      </Glow>
    </ButtonStyle>
  );
};
