import { useState } from 'react';
import {Book, Cover, Image, Description, Title} from './styles'

export const Cards = ({image, title, description}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBookClick = () => {
        setIsOpen(!isOpen);
    };

    return (
      <Book onClick={handleBookClick}>
        <Cover style={{ transform: isOpen ? 'rotateY(-80deg)' : 'rotateY(0)' }}>
          <Image src={image} alt={title} />
        </Cover>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Book>
    );
};
