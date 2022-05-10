/* eslint-disable react/require-default-props */
import React from 'react';

import { Container } from './styles';

interface CardInformationProps {
  years: number;
  title: string;
  skills: string[];
  activeYears?: boolean;
}

export const CardInformation: React.FC<CardInformationProps> = function ({
  title,
  skills,
  years,
  activeYears = true,
}) {
  return (
    <Container>
      {activeYears && (
        <div>
          <p className="years">
            {years === 1 ? `+ ${years} ano` : `+ ${years} anos`}
          </p>
        </div>
      )}

      <div>
        <h4>{title}</h4>
        <p>{skills.map(item => item).join(', ')}</p>
      </div>
    </Container>
  );
};
