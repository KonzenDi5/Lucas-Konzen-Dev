import React from 'react';
import { ButtonStyle, TextButton } from './styles';

export const ButtonProjects = ({ label, type, onClick, onChange, color }) => {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick ? onClick : undefined}
      onChange={onChange ? onChange : undefined}
      color={color}
    >
      <TextButton>{label}</TextButton>
    </ButtonStyle>
  );
};
