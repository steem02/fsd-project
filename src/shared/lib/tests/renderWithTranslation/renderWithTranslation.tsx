import { render } from '@testing-library/react';
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';

export const renderWithTranslations = (component: ReactNode) => {
  return render(
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </ThemeProvider>
  );
};
