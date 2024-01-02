import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import {Themes} from '../../styles/themes'

export const ButtonStyle = styled.button`
  background-color: ${Themes.yellow};
  border: 3px solid black;
  padding: 10px;
  border-radius: 22px;
  box-shadow: 2px 2px 1px black;
  transition: all .2s ease;
  font-size: 20px;
  font-family: 'Bebas Neue', sans-serif;
  text-decoration: none;

  &:hover {
    transform: translate(-2px, -1px);
    box-shadow: 7px 7px 1px rgb(0, 0, 0);
    transition: all .2s ease-in;
  }
`;

export const Icon = styled.div`
  ${props => {
    if (props.variant === 'linkedin') return <FaLinkedin />;
    if (props.variant === 'instagram') return <FaInstagram />;
    if (props.variant === 'github') return <FaGithub />;
  }}
`;
