import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import css from "./App.module.scss";
import { cns } from "./helpers/cns";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";

export interface IAppProps {}

export function App(props: IAppProps) {
	const { theme, toggleTheme } = useTheme();
	return (
		<BrowserRouter>
			<div className={cns("app", {}, [theme])}>
				<Link style={{ marginRight: "10px" }} to="/">
					HOME
				</Link>
				<Link to="/about">ABOUT</Link>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<MainPageAsync />} />
						<Route path="/about" element={<AboutPageAsync />} />
					</Routes>
				</Suspense>

				<button onClick={toggleTheme}>Toggle</button>
			</div>
		</BrowserRouter>
	);
}
