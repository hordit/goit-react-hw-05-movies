import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.backgroundColor};
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


h1,h2,h3,h4,h5,p {
  margin: 0;
  padding: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
