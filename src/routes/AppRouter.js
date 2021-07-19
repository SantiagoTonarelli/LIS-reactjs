import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom";
import {Activities} from "../components/Activities";
import {Form} from "../components/Form";
import {Home} from "../components/Home";
import {SlideBar} from "../containers/SlideBar";
import {useMediaQuery} from "react-responsive";
import BottomNavigationCustom from "../containers/BottomNavigationCustom";

export const AppRouter = () => {
	const isTabletOrMobile = useMediaQuery({query: "(orientation: portrait)"});
	return (
		<Router>
			<SlideBar />
			<Switch>
				<Route exact path="/form" component={Form} />
				<Route exact path="/activities" component={Activities} />
				<Route exact path="/" component={Home} />

				<Redirect to="/" />
			</Switch>
			{isTabletOrMobile && <BottomNavigationCustom />}
		</Router>
	);
};
