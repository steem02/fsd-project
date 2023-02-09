import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { cns } from "shared/lib";
import { useTheme } from "shared/ThemeProvider";
import css from "./App.module.scss";
import { AppRouter } from "./providers/Router/ui";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export interface IAppProps {}

export function App(props: IAppProps) {
	const { theme } = useTheme();
	return (
		<BrowserRouter>
			<div className={cns("app", {}, [theme])}>
				<Navbar />
				<div className={"page-wrapper"}>
					<Sidebar />
					<AppRouter />
				</div>
			</div>
		</BrowserRouter>
	);
}
