import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/main.scss';
import theme from './lib/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
