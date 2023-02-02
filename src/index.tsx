import React, { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./styles/index.scss";
import { ThemeProvider } from "./theme/ThemeProvider";

render(
	<ThemeProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</ThemeProvider>,
	document.getElementById("root")
);
