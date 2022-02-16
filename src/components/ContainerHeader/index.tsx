import React from 'react';

import { Container } from './styles';

export const ContainerHeader: React.FC = function () {
  return (
    <Container>
      <img src="perfil.jpeg" alt="imagem de perfil" />
      <div className="informations">
        <h3>Francisco Maik Fonseca Nunes</h3>
        <p>kgsdfjhasgdfgasjdgfjhgasdhfjgahjsdgfajsdf</p>
        <p>kgsdfjhasgdfgasjdgfjhgasdhfjgahjsdgfajsdf</p>
        <p>kgsdfjhasgdfgasjdgfjhgasdhfjgahjsdgfajsdf</p>
        <p>kgsdfjhasgdfgasjdgfjhgasdhfjgahjsdgfajsdf</p>
        <p>kgsdfjhasgdfgasjdgfjhgasdhfjgahjsdgfajsdf</p>
      </div>
    </Container>
  );
};
