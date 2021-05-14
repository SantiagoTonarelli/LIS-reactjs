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
import {Link} from "react-router-dom";

import imageIcon from "../images/logo-LIS.png";

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export const SlideBar = () => {
	const classes = useStyles();
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
			<ListItem>
				<Link className="link" exact to="/">
					<img className="logo" alt="stack overflow" src={imageIcon} />
				</Link>
			</ListItem>
			<Divider />
			<List>
				{[
					{text: "Agendarme a una actividad", route: "/activities"},
					{text: "Mis actividades", route: "/form"},
				].map((value, index) => (
					<ListItem button key={value.text}>
						<Link className="link" exact to={value.route}>
							<ListItemText primary={value.text} />
						</Link>
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			{
				<React.Fragment key={"left"}>
					<div className={classes.root}>
						<AppBar position="top" color="inherit">
							<Toolbar>
								<IconButton
									edge="start"
									className={classes.menuButton}
									color="inherit"
									aria-label="menu"
									onClick={toggleDrawer("left", true)}
								>
									<MenuIcon />
								</IconButton>
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
				</React.Fragment>
			}
		</div>
	);
};
