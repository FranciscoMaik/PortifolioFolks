import React from 'react';

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
          <div className="icon">
            <a href={linkProject} target="_blank" rel="noreferrer">
              <p>Visitar</p>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
