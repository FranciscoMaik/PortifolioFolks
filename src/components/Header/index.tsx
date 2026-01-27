import React from 'react';
import { Container, Title, Subtitle, Role } from './styles';

export const Header: React.FC = function () {
  return (
    <Container>
      <Role>Frontend Developer</Role>
      <Title>
        <strong>F. Maik</strong> Fonseca
      </Title>
      <Subtitle>
        Building <span>digital experiences</span> with modern technologies and
        creative design.
      </Subtitle>
      <Role
        as="a"
        href="mailto:franciscomaikf@gmail.com"
        style={{
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          textTransform: 'none',
          letterSpacing: 'normal',
        }}
      >
        franciscomaikf@gmail.com
      </Role>
    </Container>
  );
};
