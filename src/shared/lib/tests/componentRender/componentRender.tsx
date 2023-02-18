import { render } from '@testing-library/react';
import { ThemeProvider } from 'app/providers/ThemeProvider/ThemeProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTests';

interface ComponentRenderOptions {
  route: string;
}

export const componentRender = (component: ReactNode, { route }: ComponentRenderOptions) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};
