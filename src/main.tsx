import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import './main.css';
import Portfolio from './pages/landing';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <Portfolio />
    </MantineProvider>
  </StrictMode>,
)
