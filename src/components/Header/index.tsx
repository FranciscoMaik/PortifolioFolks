import React from 'react';
import Link from 'next/link';
import { Container, Title, Subtitle, Role } from './styles';
import { Nav, NavLink } from './navStyles';

export const Header: React.FC = function () {
  return (
    <Container>
      <Nav>
        <Link href="/" passHref><NavLink>Home</NavLink></Link>
        <Link href="/blog" passHref><NavLink>Blog</NavLink></Link>
      </Nav>
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
