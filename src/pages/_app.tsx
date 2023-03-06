import React from 'react';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Layout from '@/components/Layout';
import ShoppingCartProvider from '@/contexts/ShoppingCartContext';

config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#f73f01',
    secondary: '#777',
    tertiary: '#eaeaea',
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ShoppingCartProvider>
          <>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ShoppingCartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
