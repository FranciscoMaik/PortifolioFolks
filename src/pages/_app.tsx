import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../globalStyle';
import { Toggle } from '../components/button';
import { Background3D } from '../components/Background3D';
import { ThemeContextProvider, ThemeContext } from '../context/ThemeContext';

const AppContent: React.FC<AppProps> = function ({ Component, pageProps }) {
  const { themeItem } = React.useContext(ThemeContext);

  return (
    <ThemeProvider theme={themeItem}>
      <Background3D />
      <GlobalStyle />
      <Toggle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

const MyApp: React.FC<AppProps> = function (props) {
  return (
    <ThemeContextProvider>
      <AppContent {...props} />
    </ThemeContextProvider>
  );
};

export default MyApp;
