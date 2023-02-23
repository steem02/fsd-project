import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from 'app/App';
import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';
import { ThemeProvider } from 'app/providers/ThemeProvider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
  <StoreProvider>
    <BrowserRouter>
      <StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StrictMode>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
