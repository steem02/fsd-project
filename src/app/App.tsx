import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cns } from "shared/lib";
import { useTheme } from "shared/ThemeProvider";
import css from "./App.module.scss";

export interface IAppProps {}

export function App(props: IAppProps) {
	const { theme, toggleTheme } = useTheme();
	return (
		<BrowserRouter>
			<div className={cns("app", {}, [theme])}>
				<Link style={{ marginRight: "10px" }} to="/home">
					HOME
				</Link>
				<Link to="/about">ABOUT</Link>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/about" element={<AboutPage />} />
						<Route path="/home" element={<MainPage />} />
					</Routes>
				</Suspense>

				<button onClick={toggleTheme}>Toggle</button>
			</div>
		</BrowserRouter>
	);
}
