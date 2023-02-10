import { PropsWithChildren } from 'react';
import { cns } from 'shared/lib';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonVariant } from 'shared/ui/Button';
import css from './ThemeSwitcher.module.scss';
import DarkIcon from '../assets/theme-dark.svg';
import LightIcon from '../assets/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: PropsWithChildren<ThemeSwitcherProps>) {
  const { className } = props;
  const { theme = Theme.LIGHT, toggleTheme } = useTheme();
  return (
    <Button className={cns(css.root, { className })} onClick={toggleTheme} theme={ButtonVariant.OUTLINED}>
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
}
