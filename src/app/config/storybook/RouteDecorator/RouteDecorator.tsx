import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from 'shared/hooks/useTheme';

export const RouteDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
