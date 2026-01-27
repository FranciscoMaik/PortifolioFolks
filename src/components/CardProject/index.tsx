import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container, HeaderItem } from './styles';

interface CardProjectProps {
  header: string;
  description: string;
  linkProject: string;
}

export const CardProject: React.FC<CardProjectProps> = function ({
  description,
  header,
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
        <div className="icon">
          <a href={linkProject} target="_blank" rel="noreferrer">
            <span>Visitar Projeto</span>
            <FiArrowRight />
          </a>
        </div>
      </div>
    </Container>
  );
};
