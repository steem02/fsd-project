import { Story, StoryContext } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { useEffect } from 'react';
import { Theme } from 'shared/hooks/useTheme';
import cns from 'shared/lib/classnames/cns';
import css from './ThemeDecorator.module.scss';

export const ThemeDecorator = (StoryComponent: Story, context: StoryContext) => {
  const theme = context?.parameters?.theme;
  // const theme = context?.globals.theme;
  const storyTheme = theme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK;

  useEffect(() => {
    document.body.className = storyTheme;
  }, [storyTheme]);

  return (
    <ThemeProvider>
      <div className={cns('app', {}, [css.root])}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
