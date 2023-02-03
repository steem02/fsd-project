import React, { StrictMode } from "react";
import { render } from "react-dom";
import "app/styles/index.scss";
import { ThemeProvider } from "shared/ThemeProvider";
import { App } from "app/App";

render(
	<ThemeProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</ThemeProvider>,
	document.getElementById("root")
);
