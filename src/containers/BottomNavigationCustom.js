import React from "react";
import SportsTennisIcon from "@material-ui/icons/SportsTennis";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import {Link} from "react-router-dom";
import {
	BottomNavigation,
	BottomNavigationAction,
	CssBaseline,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: theme.palette.primary.light,
		position: "fixed",
		bottom: "0",
		width: "100%",
	},
	link: {
		textDecoration: "none",
		color: "#FFFFFF",
	},
}));

export default function BottomNavigationCustom() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			className={classes.root}
		>
			<CssBaseline />
			<BottomNavigationAction
				key="Agendarme"
				exact="true"
				className={classes.link}
				label="Agendarme"
				icon={<SportsTennisIcon />}
				component={Link}
				to="/activities"
			/>
			<BottomNavigationAction
				key="Agenda"
				exact="true"
				className={classes.link}
				component={Link}
				to="/"
				label="Agenda"
				icon={<CalendarTodayIcon />}
			/>
		</BottomNavigation>
	);
}
