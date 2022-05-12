/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../../context/ThemeContext';

import { Container } from './styles';

export const Toggle: React.FC = function () {
  const { handleChangedTheme, themeItem } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themeItem}>
      <Container>
        <label className="switch">
          <input type="checkbox" onClick={handleChangedTheme} />
          <span className="slider round" />
        </label>
      </Container>
    </ThemeProvider>
  );
};
