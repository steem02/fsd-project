import React, { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import 'app/styles/index.scss';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { App } from 'app/App';

import 'shared/config/i18n/i18n';

render(
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
