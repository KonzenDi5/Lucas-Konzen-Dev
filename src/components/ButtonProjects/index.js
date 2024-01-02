import React from 'react';
import { ButtonStyle, ContainerStars, Glow, Circle, Stars } from './styles';

export const ButtonProjects = ({ label, type, onClick, onChange, color }) => {
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
