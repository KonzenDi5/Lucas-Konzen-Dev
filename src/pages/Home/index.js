import React, { useState, useEffect } from 'react';
import { Container, Layer1, Layer2, Layer3, Layer4, Frase, Logo, Title, Subtitle, Text, Conteudo, Decor, Macbook, ButtonsRow, StyledLink } from './styles';
import logoimage from '../../assets/LOGOBLACK.png';
import coracao from '../../assets/IMG_0602.PNG';
import mao from '../../assets/IMG_0601.PNG';
import macbook from '../../assets/IMG_0600.PNG';
import macbookPiscada from '../../assets/IMG_0600piscada.png';
import rosto from '../../assets/IMG_0598.PNG';
import piscadela from '../../assets/IMG_0597.PNG';
import ideia from '../../assets/IMG_0599.PNG';
import zen from '../../assets/IMG_0676.PNG';
import pare from '../../assets/IMG_0677.PNG';
import { Fade, Zoom } from 'react-reveal';
import {Button} from '../../components/Button'
import {ButtonProjects} from '../../components/ButtonProjects'



export const Home = () => {
  const [text, setText] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const [isMacbookWinking, setIsMacbookWinking] = useState(false);
  const fullText = 'Knowledge is boldness, make the change.';

  useEffect(() => {
    if (text.length < fullText.length) {
      setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 50); // Ajuste a velocidade aqui
    } else {
      setTimeout(() => {
        setShowButtons(true);
      }, 2000); // Atraso de 3 segundos
    }
  }, [text]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsMacbookWinking(prevState => !prevState); // inverte o estado atual
    }, isMacbookWinking ? 500 : 3000); // pisca a cada 3 segundos e fecha por 0,5 segundos

    return () => {
      clearInterval(timer); // limpa o intervalo quando o componente é desmontado
    };
  }, [isMacbookWinking]);

  return (
    <Container>
      <Layer1>
        <Logo src={logoimage} alt="logo" />
        {!showButtons ? <Frase>{text}</Frase> : <><Fade>

        <StyledLink to= '/projetos'>
          <ButtonProjects  label = 'PROJETOS'/>
          </StyledLink>
          <StyledLink to= '/'>
          <ButtonProjects  label = 'CERTIFICAÇÕES'/>
          </StyledLink>

          <ButtonsRow>
          <StyledLink to= 'https://github.com/KonzenDi5'>
          <Button label = 'GITHUB' />
          </StyledLink>

          <StyledLink to= 'https://www.linkedin.com/in/lucas-da-silva-konzen-73a02a220/'>
          <Button label = 'LINKEDIN' />
          </StyledLink>

          <StyledLink to= 'https://www.instagram.com/httpkonzen/'>
          <Button  label = 'INSTAGRAM' />
          </StyledLink>
          </ButtonsRow>
          </Fade></>}
          
        <Macbook alt="mac" src={isMacbookWinking ? macbookPiscada : macbook} />
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

      <Layer3>
        <Zoom>
        <Subtitle>2019:</Subtitle>
        <Text> Aos 20 anos, decidi estudar desenvolvimento web, fundindo minha criatividade com a habilidade de codificar.</Text>
        <Decor alt="Decor" src={zen} />
        </Zoom>
      </Layer3>

      <Layer4>
        <Zoom>
        <Subtitle>Atualidade:</Subtitle>
        <Text>Formado em Análise e Desenvolvimento de Sistemas, estou em busca de construir uma sólida carreira como desenvolvedor web. Com mais de 32 cursos no currículo, domino tecnologias como C#, .NET, Mediator, React, Firebase, Flutter e JavaScript Avançado ES6. Meu trabalho em projetos próprios reflete minha constante busca por conhecimento e aprimoramento profissional.</Text>
        <Decor alt="Decor" src={pare} />
        </Zoom>
      </Layer4>
    </Container>
  );
};
