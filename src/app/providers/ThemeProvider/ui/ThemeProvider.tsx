import React, { PropsWithChildren, useMemo, useState } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme: Theme;
  toggleTheme(): void;
}

export const ThemeContext = React.createContext<ThemeContextProps | null>(null);

const LOCAL_STORAGE_THEME_KEY = 'theme';

const getTheme = (theme: string | null): Theme =>
  Object.values(Theme).some((item: Theme) => theme === item) ? (theme as Theme) : Theme.LIGHT;

const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | null;
const defaultTheme: Theme = getTheme(storageTheme);

function ThemeProvider({ children }: PropsWithChildren<unknown>) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;