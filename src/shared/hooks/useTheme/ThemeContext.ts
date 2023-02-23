import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app-theme-light',
  DARK = 'app-theme-dark',
}

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme(): void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);
