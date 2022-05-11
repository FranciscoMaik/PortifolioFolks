/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Container } from './styles';

interface ToggleProps {
  handleToggleTheme: () => void;
}

export const Toggle: React.FC<ToggleProps> = function ({ handleToggleTheme }) {
  return (
    <Container>
      <label className="switch">
        <input type="checkbox" onClick={handleToggleTheme} />
        <span className="slider round" />
      </label>
    </Container>
  );
};
