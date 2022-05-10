import React from 'react';

import { Container, HeaderItem } from './styles';

interface CardStatisticProps {
  header: string;
  description: string;
  numberInfo: string;
}

export const CardStatistic: React.FC<CardStatisticProps> = function ({
  description,
  header,
  numberInfo,
}) {
  return (
    <Container>
      <div className="staticInfo">
        <span>+</span>
        <h2>{numberInfo}</h2>
      </div>
      <div>
        <div className="summary">
          <HeaderItem>
            <h3>{header}</h3>
          </HeaderItem>
          <div className="text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
