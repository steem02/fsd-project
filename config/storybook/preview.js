import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/app/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/app/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/app/config/storybook/RouteDecorator/RouteDecorator';
import { Theme } from '../../src/shared/hooks/useTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(RouteDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
