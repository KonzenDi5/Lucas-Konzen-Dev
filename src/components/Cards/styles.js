import styled from 'styled-components';
import { Themes } from '../../styles/themes';

export const Book = styled.div`
  position: relative;

  border-radius: 10px;
  width: 220px;
  height: 300px;
  background-color: ${Themes.lightyellow};
  box-shadow: 1px 1px 12px #000;
  transform: preserve-3d;
  perspective: 2000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
`;

export const Cover = styled.div`
  top: 0;
  position: absolute;
  background-color: ${Themes.yellow};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  transform-origin: 0;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Book}:hover & {
    transition: all 0.5s;
    transform: rotatey(-80deg);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
`;