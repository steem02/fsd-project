import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider/ThemeProvider';
import { Theme } from 'shared/hooks/useTheme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
