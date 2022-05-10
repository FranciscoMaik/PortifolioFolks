import React from 'react';
import styled from 'styled-components';
import { Chrono, TimelineItem } from 'react-chrono';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
`;

const items: TimelineItem[] = [
  {
    title: 'Abr 2017',
    cardTitle: 'Diretor',
    cardSubtitle: 'Diretor de Tecnologia da Informação',
    cardDetailedText:
      'Neste período fui responsável por coordenar, organizar e auxiliar em projetos voltado para alunos do curso de Sistemas de Informação.',
  },
  {
    title: 'Mar 2019',
    cardTitle: 'Diretor',
    cardSubtitle: 'Diretor de Gerência de Projetos',
    cardDetailedText:
      'Neste período fui responsável por coordenar, organizar e auxiliar na estruturação de projetos para o campus e empresas da região de Picos-PI.',
  },
  {
    title: 'Jan 2021',
    cardTitle: 'Estágio',
    cardSubtitle: 'Estágio obrigatório',
    cardDetailedText:
      'Neste período estagiei na empresa Multiveículos.com como Gerente de Projetos e Desenvolvedor mobile. Gerenciando o desenvolvimento web da página de vendas da empresa e desenvolvendo o app relacional com essa site.',
  },
  {
    title: 'Set 2021',
    cardTitle: 'Desenvolvedor',
    cardSubtitle: 'Desenvolvedor Front-end',
    cardDetailedText:
      'Durante a ocupação deste cargo pude trabalhar com tecnologias como ReactJs, NextJs, Gráficos diversos e ferramentas de estilização como Styled-Components e ChackraUi.',
  },
];

export const Timeline: React.FC = function () {
  return (
    <Container>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        cardWidth={400}
        hideControls
        lineWidth={1}
        timelineCircleDimension={8}
        itemWidth={400}
        theme={{
          titleColor: '#4a90e2',
          cardBgColor: 'transparent',
          cardForeColor: '#000',
          primary: '#575c82',
          secondary: 'transparent',
        }}
      />
    </Container>
  );
};
