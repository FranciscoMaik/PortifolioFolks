import React from 'react';
import type { AppProps } from 'next/app';
import apm from '../../elastic-apm-node.js';
import { GlobalStyle } from '../../globalStyle';
import { Toggle } from '../components/button';
import { ThemeContextProvider } from '../context/ThemeContext';

const MyApp: React.FC<AppProps> = function ({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Toggle />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeContextProvider>
  );
};

export default MyApp;
