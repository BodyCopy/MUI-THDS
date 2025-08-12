import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import './index.scss';
import App from './App.tsx';
import baseTheme from './themes/base';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={baseTheme}> {/* Wrap App with ThemeProvider */}
      <CssBaseline /> {/* Normalize styles */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);