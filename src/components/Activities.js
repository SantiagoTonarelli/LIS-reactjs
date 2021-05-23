import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	makeStyles,
} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";

import {addSelectedActivity} from "../actions/activities";
import {activities} from "../data/activitiesData";
import {activitiesImages} from "../helpers/activitiesImages";

const useStyles = makeStyles((theme) => {
	return {
		root: {
			width: "35ch",
			margin: theme.spacing(2),
		},
		media: {
			height: "20ch",
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
					<Card
						className={classes.root}
						onClick={() => dispatch(addSelectedActivity(activity))}
					>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								component="img"
								image={activitiesImages(`./${activity.img}`)}
								title={activity.title}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
								>
									{activity.title}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</Grid>
		</>
	);
};
