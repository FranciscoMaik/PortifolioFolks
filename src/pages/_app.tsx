import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../globalStyle';
import { theme, themeDark } from '../styles/Theme/theme';
import { Toggle } from '../components/button';

const MyApp: React.FC<AppProps> = function ({ Component, pageProps }) {
  const [themeSelected, setThemeSelected] = useState<boolean>(true);

  const handleToggleTheme = () => setThemeSelected(!themeSelected);

  return (
    <ThemeProvider theme={themeSelected ? theme : themeDark}>
      <Toggle handleToggleTheme={handleToggleTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
