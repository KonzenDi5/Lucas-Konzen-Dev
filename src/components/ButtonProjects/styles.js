import styled, { keyframes } from 'styled-components';


const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const animStar = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-135rem);
  }
`;

const animStarRotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
`;

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  overflow: hidden;
  color: white;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: ${gradient} 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #FA7900 10%, #FAA300 45%, #FAA300 67%, #FA7900 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
  text-decoration: none !important;

  &:hover {
    transform: scale(1.1);

    text-decoration: none;

  }

  &:active {
    border: double 4px #FE53BB;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }
`;

export const ContainerStars = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  
`;

export const Glow = styled.div`
  position: absolute;
  display: flex;
  width: 12rem;
`;

export const Circle = styled.div`
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: ${pulse} 4s infinite;
  z-index: -1;
`;

export const Stars = styled.div`
  position: absolute;
  background: transparent;
  width: 200rem;
  height: 200rem;

  &::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: ${animStarRotate} 90s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: ${animStar} 60s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }
`;
