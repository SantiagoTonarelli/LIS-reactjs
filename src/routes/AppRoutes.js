import React from "react";
import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/forms" component={} />
				<Route exact path="/activities" component={} />
				<Route exact path="/" component={} />

				<Redirect to="/" />
			</Switch>
		</Router>
	);
};
