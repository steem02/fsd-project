import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme(): void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);
