import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

import { Container, HeaderItem } from './styles';

interface CardProjectProps {
  header: string;
  description: string;
  image: string;
  linkProject: string;
}

export const CardProject: React.FC<CardProjectProps> = function ({
  description,
  header,
  image,
  linkProject,
}) {
  return (
    <Container>
      <div>
        <div className="summary">
          <HeaderItem>
            <h3>{header}</h3>
          </HeaderItem>
          <div className="text">
            <p>{description}</p>
          </div>
        </div>
        <img src={image} alt="celular" />
      </div>
      <div className="icon">
        <a href={linkProject} target="_blank" rel="noreferrer">
          <BsArrowRightShort size={18} color="#8A2BE2" />
        </a>
      </div>
    </Container>
  );
};
