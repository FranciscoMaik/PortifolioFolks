import React from 'react';

import { Container } from './styles';

export const ContainerHeader: React.FC = function () {
  return (
    <Container>
      <p>
        No MundoInvest, impulsiono a inovação como Tech Lead Frontend,
        desenvolvendo soluções móveis e web com React Native e ReactJS. Nossa
        equipe prioriza a performance e a escalabilidade.
      </p>
      <p>
        <strong>Destaques da minha experiência:</strong>
      </p>
      <ul>
        <li>
          Liderei uma equipe de 4 desenvolvedores frontend para o desenvolvimento
          do app Mundo Invest e de áreas de organização e gerenciamento financeiro
          na web.
        </li>
        <li>
          Iniciei o projeto mobile para Android e iOS, que resultou em 4737
          downloads nos primeiros meses.
        </li>
        <li>
          Otimizei a performance do projeto mobile, reduzindo o tempo de
          carregamento em 2 segundos para 500ms, aumentando a taxa de engajamento.
        </li>
      </ul>
      <p>
        Minha expertise em tecnologias modernas e liderança técnica contribui
        para o sucesso dos projetos. Valorizo a colaboração e me dedico a criar
        ambientes que promovem o crescimento conjunto.
      </p>
    </Container>
  );
};
