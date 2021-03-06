import React from "react";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link, useLocation} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ListItemIcon, Typography} from "@material-ui/core";
import SportsTennisIcon from "@material-ui/icons/SportsTennis";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import {useMediaQuery} from "react-responsive";

import imageIcon from "../images/logo-LIS.png";

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	root: {
		flexGrow: 1,
	},
	logo: {
		width: "25ch",
	},
	logoAppBar: {
		width: "15ch",
		justify: "center",
		alignItems: "center",
		paddingTop: theme.spacing(0),
		paddingButtom: theme.spacing(0),
	},
	link: {
		textDecoration: "none",
		color: theme.palette.primary.main,
		visited: {
			color: theme.palette.light,
		},
	},
}));

export const SideBar = () => {
	const classes = useStyles();
	const location = useLocation();
	const isTabletOrMobile = useMediaQuery({query: "(orientation: portrait)"});

	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({...state, [anchor]: open});
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list)}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Link className={classes.link} exact="true" to="/">
				<ListItem>
					<img className={classes.logo} alt="logo" src={imageIcon} />
				</ListItem>
			</Link>
			<Divider />
			<List>
				{[
					{text: "Agendarme", route: "/activities"},
					{text: "Agenda", route: "/"},
				].map((value, index) => (
					<Link
						key={value.text}
						className={classes.link}
						exact="true"
						to={value.route}
					>
						<ListItem button key={value.text}>
							<ListItemIcon>
								{index % 2 === 0 ? (
									<SportsTennisIcon color="primary" />
								) : (
									<CalendarTodayIcon color="primary" />
								)}
							</ListItemIcon>
							<ListItemText primary={value.text} />
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);

	return (
		<>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="static" color="primary">
					<Toolbar>
						{!isTabletOrMobile && (
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={toggleDrawer("left", true)}
							>
								<MenuIcon />
							</IconButton>
						)}
						<Typography variant="h6" className={classes.title}>
							{location.pathname === "/" ? "Agenda" : "Agendarme"}
						</Typography>
						<img
							className={classes.logoAppBar}
							alt="stack overflow"
							src={imageIcon}
						/>
					</Toolbar>
				</AppBar>
			</div>
			<Drawer
				anchor={"left"}
				open={state["left"]}
				onClose={toggleDrawer("left", false)}
			>
				{list("left")}
			</Drawer>
		</>
	);
};
