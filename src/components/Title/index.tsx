import React from 'react';

import { Container } from './styles';

interface TitleProps {
  name: string;
}

export const Title: React.FC<TitleProps> = function ({ name }) {
  return (
    <Container>
      <h2>{name}</h2>
    </Container>
  );
};
