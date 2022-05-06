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
    title: 'Jan 2021',
    cardTitle: 'Estágio',
    cardSubtitle: 'Estágio obrigatório',
    cardDetailedText:
      'Neste período estagiei na empresa Multiveículos.com como Gerente de Projetos e Desenvolvedor mobile. Gerenciando o desenvolvimento web da página de vendas da empresa e desenvolvendo o app relacional com essa site.',
  },
  {
    title: 'Set 2021',
    cardTitle: 'Estágio',
    cardSubtitle: 'Estágio obrigatório',
    cardDetailedText:
      'Neste período estagiei na empresa Multiveículos.com como Gerente de Projetos e Desenvolvedor mobile. Gerenciando o desenvolvimento web da página de vendas da empresa e desenvolvendo o app relacional com essa site.',
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
        theme={{
          titleColor: '#575c82',
          cardBgColor: 'transparent',
          cardForeColor: '#000',
          primary: '#575c82',
          secondary: '#4E86CA',
        }}
      />
    </Container>
  );
};
