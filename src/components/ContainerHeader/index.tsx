import React from 'react';

import { Container } from './styles';

export const ContainerHeader: React.FC = function () {
  return (
    <Container>
      <img src="perfil.jpeg" alt="imagem de perfil" />
      <div className="informations">
        <h3>Francisco Maik Fonseca Nunes</h3>
        <p>
          Sou desenvolvedor Front-end, tenho conhecimento nas liguagens
          Javascript e Python. Desenvolvo utilizando ReactJs e NextJs para Web e
          React Native para mobile. Sou graduando em Sistemas de Informação pela
          UFPI no qual fui representante do CASI e Empresa Júnior Juá. Foi
          estagiário na Multiveículos.com lideredando o desenvolvimento do seu
          sistema de catálogo Web e Mobile. Atualmente trabalho na EWZ Capital
          como desenvolvedor Front-end.
        </p>
      </div>
    </Container>
  );
};
