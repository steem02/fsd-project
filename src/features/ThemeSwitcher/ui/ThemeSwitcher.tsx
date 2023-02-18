import { PropsWithChildren } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'shared/hooks/useTheme';
import cns from 'shared/lib/classnames/cns';
import DarkIcon from '../assets/theme-dark.svg';
import LightIcon from '../assets/theme-light.svg';
import css from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: PropsWithChildren<ThemeSwitcherProps>) {
  const { className } = props;
  const { theme = Theme.LIGHT, toggleTheme } = useTheme();
  return (
    <Button className={cns(css.root, { className })} onClick={toggleTheme} variant={ButtonVariant.OUTLINED}>
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
}
