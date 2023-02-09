import React, { PropsWithChildren, useState } from "react";
import { ValueOf } from "shared/types/types";

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
}

interface ThemeContextProps {
	theme: Theme;
	toggleTheme(): void;
}

export const ThemeContext = React.createContext<ThemeContextProps | null>(null);

const LOCAL_STORAGE_THEME_KEY = "theme";

const getTheme = (theme: Theme | string | null): Theme | null =>
	Object.values(Theme).some((item: Theme) => theme === item) ? (theme as Theme) : null;

const defaultTheme: Theme = getTheme(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) || Theme.LIGHT;

function ThemeProvider({ children }: PropsWithChildren<{}>) {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const toggleTheme = () => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
