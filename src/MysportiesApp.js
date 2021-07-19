import React from "react";
import {AppRouter} from "./routes/AppRouter";
import {Provider} from "react-redux";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

import {store} from "./store/store";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#2195f2",
			light: "#6ec5ff",
			dark: "#0068bf",
		},
	},
});

export default function MysportiesApp() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</ThemeProvider>
	);
}
