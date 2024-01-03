
import { ButtonStyle, ContainerStars, Glow, Circle, Stars } from './styles';
import React, { useEffect } from 'react';


export const ButtonProjects = ({ label, type, onClick, onChange, color }) => {
  useEffect(() => {
    console.log('useEffect triggered');
    const containerStars = document.getElementById('container-stars');
    containerStars.style.animationPlayState = 'running';
  }, []);

  return (
    <ButtonStyle
      type={type}
      onClick={onClick ? onClick : undefined}
      onChange={onChange ? onChange : undefined}
      color={color}
    >
      {label}
      <ContainerStars id="container-stars">
        <Stars id="stars"></Stars>
      </ContainerStars>
      <Glow id="glow">
        <Circle className="circle"></Circle>
        <Circle className="circle"></Circle>
      </Glow>
    </ButtonStyle>
  );
};
