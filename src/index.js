import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    backgroundColor: '#880522',
    bgdWrapper: '#2e2828c1',
  },
  breakpoints: {
    xxs: '320px',
    xs: '480px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
},
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
    <ThemeProvider theme={theme} >
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
