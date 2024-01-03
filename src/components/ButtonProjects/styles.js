import styled, { keyframes } from 'styled-components';
import {Themes} from '../../styles/themes'

const amm = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const ButtonStyle = styled.button`
  position: relative;
  width: 120px;
  height: 45px;
  overflow: hidden;
  border: none;
  background-color: ${Themes.hiperyellow};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 10px;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: 0 0 10px black;

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 200px;
    margin-top: -92px;
    background: linear-gradient(black,#FAAA00);
    animation: ${amm} 2s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 4px;
    background-color: ${Themes.black};
    color: ${Themes.yellow};
    border-radius: 50px;
  }
`;

export const TextButton = styled.span`
  position: relative;
  font-size: 12px;
  font-weight: bold;
  color: ${Themes.yellow};
  z-index: 1;
`;
