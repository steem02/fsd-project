import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/app/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/app/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/app/config/storybook/RouteDecorator/RouteDecorator';
import { Theme } from '../../src/shared/hooks/useTheme';
import i18n from '../../src/shared/config/i18n/i18nStorybook';

export const globalTypes = {
  theme: {
    title: 'Theme',
    defaultValue: Theme.LIGHT,
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: Theme.LIGHT, icon: 'circlehollow', title: 'Light' },
        { value: Theme.DARK, icon: 'circle', title: 'Dark' },
      ],
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'ru',
  locales: {
    en: 'en',
    ru: 'ru',
  },
};

addDecorator(RouteDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator);
