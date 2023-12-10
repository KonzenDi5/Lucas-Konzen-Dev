import React from 'react';
import { Container, Layer1, Layer2, Layer3, Frase, Logo, Title, Subtitle, Text, Conteudo, Decor, Macbook } from './styles';
import logoimage from '../../assets/LOGOBLACK.png';
import coracao from '../../assets/IMG_0602.PNG';
import mao from '../../assets/IMG_0601.PNG';
import macbook from '../../assets/IMG_0600.PNG';
import rosto from '../../assets/IMG_0598.PNG';
import piscadela from '../../assets/IMG_0597.PNG';
import ideia from '../../assets/IMG_0599.PNG';
import { Fade, Zoom } from 'react-reveal';

export const Home = () => {
  return (
    <Container>
      <Layer1>
        <Logo src={logoimage} alt="logo" />
        <Frase />
        <Macbook alt="mac" src={macbook} />
      </Layer1>

      <Layer2>
        <Fade>
          <Title>Minha trajetória:</Title>
        </Fade>
        <Zoom>
          <Conteudo>
            <Subtitle>1999:</Subtitle>
            <Text>Nasci e dei início à minha jornada, marcada por uma curiosidade inata pela tecnologia.</Text>
            <Decor alt="Decor" src={coracao} />
          </Conteudo>
        </Zoom>
      </Layer2>

      <Layer3>
        <Zoom>
          <Conteudo>
            <Decor alt="Decor" src={mao} />
            <Subtitle>2008:</Subtitle>
            <Text>: Aos nove anos, comecei meu primeiro curso de tecnologia, lançando as bases para o que viria a ser minha paixão profunda.</Text>
          </Conteudo>
        </Zoom>
      </Layer3>

      <Layer2>
        <Zoom>
          <Conteudo>
            <Subtitle>2009:</Subtitle>
            <Text> Aos 10 anos, ganhei meu primeiro computador. Semanalmente, desmontava e remontava a máquina, ansioso por desvendar seus segredos.</Text>
            <Decor alt="Decor" src={rosto} />
          </Conteudo>
        </Zoom>
      </Layer2>

      <Layer3>
        <Zoom>
          <Conteudo>
            <Decor alt="Decor" src={piscadela} />
            <Subtitle>2011:</Subtitle>
            <Text>: Aos 12 anos, mergulhei na cibersegurança, explorando um novo aspecto fascinante do mundo tecnológico.</Text>
          </Conteudo>
        </Zoom>
      </Layer3>

      <Layer2>
        <Zoom>
          <Conteudo>
            <Subtitle>2015:</Subtitle>
            <Text> Aos 16 anos, meu foco mudou para o design de interfaces e a experiência do usuário, despertando uma nova paixão criativa.</Text>
            <Decor alt="Decor" src={ideia} />
          </Conteudo>
        </Zoom>
      </Layer2>
    </Container>
  );
}


