import React from 'react';
import { Container, Title, Subtitle, Role } from './styles';

export const Header: React.FC = function () {
  return (
    <Container>
      <Role>Desenvolvedor Frontend e Mobile | Tech Lead | React, NextJS, React Native, TypeScript</Role>
      <Title>
        <strong>Francisco Maik</strong> Fonseca Nunes
      </Title>
      <Subtitle>
        Cajamar, São Paulo, Brasil
      </Subtitle>
      <Role
        as="a"
        href="mailto:chiconunes3081@gmail.com"
        style={{
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          textTransform: 'none',
          letterSpacing: 'normal',
        }}
      >
        chiconunes3081@gmail.com
      </Role>
    </Container>
  );
};
