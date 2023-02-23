import { useMemo, useState, useCallback, ReactNode } from 'react';
import { Theme, ThemeContext } from 'shared/hooks/useTheme';

const LOCAL_STORAGE_THEME_KEY = 'theme';

const getTheme = (theme: string | null): Theme =>
  Object.values(Theme).some((item: Theme) => theme === item) ? (theme as Theme) : Theme.LIGHT;

const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | null;
const defaultTheme: Theme = getTheme(storageTheme);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
