import React, { useState, useEffect, useRef } from 'react';
import { Card, SVG, CardContent, CardTitle, CardDescription, FlipButton, CertificacoesContainer } from './styles';

export const Certificacoes = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef(null);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleClickOutside = (event) => {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
            setIsFlipped(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <CertificacoesContainer>
        <Card isFlipped={isFlipped} ref={cardRef}>
            <SVG />
            <CardContent>
                <CardTitle />
                <CardDescription />
            </CardContent>
            <FlipButton onClick={handleClick}>Saiba mais</FlipButton>
        </Card>
        </CertificacoesContainer>
    );
}
