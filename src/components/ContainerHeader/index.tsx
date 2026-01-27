import React from 'react';

import { Container } from './styles';

export const ContainerHeader: React.FC = function () {
  return (
    <Container>
      {/* @ts-ignore */}
      <div>
        <p>
          <strong>Tech Lead Frontend focado em Performance e Escala</strong>
        </p>
        <p>
          No MundoInvest, lidero a evolução de plataformas web e mobile usando
          React e React Native. Minha missão é unir excelência técnica com visão de
          produto.
        </p>
        <p>
          <strong>Entregas de Valor:</strong>
        </p>
        <ul>
          <li>
            <strong>Liderança Técnica:</strong> Gestão direta de 4 desenvolvedores,
            garantindo qualidade de código e cultura de ownership no App e Web.
          </li>
          <li>
            <strong>Impacto Mobile:</strong> Lançamento do app Android/iOS,
            alcançando <strong>4.737 downloads</strong> nos primeiros meses.
          </li>
          <li>
            <strong>Otimização Crítica:</strong> Redução de{' '}
            <strong>75% no tempo de carregamento</strong> (2s para 500ms),
            impulsionando diretamente o engajamento do usuário.
          </li>
        </ul>
      </div>
    </Container>
  );
};
