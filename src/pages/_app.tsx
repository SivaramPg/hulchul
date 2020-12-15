import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: 'JetBrainsMono';
  }

  @font-face {
    font-family: 'JetBrainsMono';
    src: url('fonts/JetBrainsMono-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }
`;

const theme = {};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
