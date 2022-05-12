/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../../context/ThemeContext';

import { Container } from './styles';

export const Toggle: React.FC = function () {
  const { handleChangedTheme, themeItem } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themeItem}>
      <Container>
        <MdLightMode size={14} color={themeItem.colorText} />
        <label className="switch">
          <input type="checkbox" onClick={handleChangedTheme} />
          <span className="slider round" />
        </label>
        <MdDarkMode size={14} color={themeItem.colorText} />
      </Container>
    </ThemeProvider>
  );
};
