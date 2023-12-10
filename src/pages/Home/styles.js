import styled from 'styled-components'
import { Themes } from '../../styles/themes'



export const Container  = styled.div`
width: 100%;
height: 100%;
`

export const Layer1 = styled.div`
width: 100%;
height: 100%;
background-color: ${Themes.yellow};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const Macbook = styled.img`
width: 300px;
`

export const Layer2 = styled.div`
background-color: ${Themes.black};
color: white;
`
export const Layer3 = styled.div`
background-color: ${Themes.yellow};
color: ${Themes.black};
`

export const Title = styled.h1`
font-family: 'Bebas Neue', sans-serif;
padding: 10px;
`
export const Subtitle = styled.h2`
font-family: 'Bebas Neue', sans-serif;
padding: 10px;
`
export const Text = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 14px;
padding: 10px;
`
export const Conteudo = styled.div`
display: flex;
flex-direction: row;
`

export const Decor = styled.img`
width: 200px;
`



export const Logo = styled.img`
    width: 500px;
    margin-left: 30px;
`

export const Frase = styled.div`
font-size: 24px;
`

