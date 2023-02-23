import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTests';

interface ComponentRenderOptions {
  route?: string;
  initialStore?: Partial<StateSchema>;
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
  const { route = '/', initialStore } = options;
  return render(
    <StoreProvider initialStore={initialStore}>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
        </ThemeProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
