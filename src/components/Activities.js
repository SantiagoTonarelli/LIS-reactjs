import {
	ButtonBase,
	Grid,
	GridListTile,
	GridListTileBar,
	makeStyles,
} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { addSelectedActivity } from "../actions/activities";
import { activities } from "../data/activitiesData";
import { activitiesImages } from "../helpers/activitiesImages";

const useStyles = makeStyles((theme) => {
	return {
		activity: {
			width: "35ch",
			height: "20ch",
			listStyle: "none",
		},
		buttomActivity: {
			margin: theme.spacing(2),
		},
		title: {
			margin: theme.spacing(2),
			color: theme.palette.primary.dark,
		},
	};
});

export const Activities = () => {
	const classes = useStyles();
	const {activity} = useSelector((state) => state.activities);
	const dispatch = useDispatch();
	
	if (activity) {
		return <Redirect to="/form" />;
	}

	return (
		<>
			<Typography
				align="center"
				variant="h3"
				component="h2"
				gutterBottom
				className={classes.title}
			>
				Seleccione una actividad
			</Typography>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				{activities.map((activity) => (
					<ButtonBase
						className={classes.buttomActivity}
						key={activity.img}
						onClick={() => dispatch(addSelectedActivity(activity))}
					>
						<GridListTile className={classes.activity}>
							<img
								src={activitiesImages(`./${activity.img}`)}
								alt={activity.title}
							/>
							<GridListTileBar title={activity.title} />
						</GridListTile>
					</ButtonBase>
				))}
			</Grid>
		</>
	);
};
