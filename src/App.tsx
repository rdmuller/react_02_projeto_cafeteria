import { ThemeProvider } from "styled-components";
import React from "react";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
		</ThemeProvider>
	);
}