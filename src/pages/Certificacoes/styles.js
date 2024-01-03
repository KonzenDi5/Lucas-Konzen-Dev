import styled from 'styled-components';

export const CertificacoesContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: ${props => (props.isFlipped ? 'rotateX(180deg)' : 'rotateX(0)')};
`;

export const SVG = styled.svg`
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${Card}:hover & {
    scale: 0;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${Card}:hover & {
    transform: rotateX(0deg);
  }
`;

export const CardTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
`;

export const CardDescription = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
`;

export const FlipButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
