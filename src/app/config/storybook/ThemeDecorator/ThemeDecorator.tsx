import { Story, StoryContext } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider/ThemeProvider';
import { Theme } from 'shared/hooks/useTheme';
import cns from 'shared/lib/classnames/cns';
import css from './ThemeDecorator.module.scss';

export const ThemeDecorator = (StoryComponent: Story, context: StoryContext) => {
  const theme = context?.parameters?.theme || context?.globals.theme;
  const storyTheme = theme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK;

  return (
    <ThemeProvider>
      <div className={cns('theme', {}, [css.root, storyTheme])}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
