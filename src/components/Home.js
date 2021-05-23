import {
	Grid,
	GridListTile,
	GridListTileBar,
	makeStyles,
} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import moment from "moment";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteSelectedActivity} from "../actions/activities";
import {activitiesImages} from "../helpers/activitiesImages";

const useStyles = makeStyles((theme) => {
	return {
		activity: {
			width: "35ch",
			height: "20ch",
			listStyle: "none",
			margin: theme.spacing(2),
		},
		title: {
			margin: theme.spacing(2),
			color: theme.palette.primary.dark,
		},
		error: {
			margin: theme.spacing(8),
			color: theme.palette.primary.dark,
			position: "absolute",
			top: "40%",
		},
	};
});

export const Home = () => {
	const {activities} = useSelector((state) => state.activities);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(deleteSelectedActivity());
	}, [dispatch]);

	const classes = useStyles();

	return (
		<>
			<Typography
				align="center"
				variant="h3"
				component="h2"
				gutterBottom
				className={classes.title}
			>
				Agenda
			</Typography>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				{!activities || activities.length === 0 ? (
					<Typography
						align="center"
						variant="h4"
						component="h3"
						gutterBottom
						className={classes.error}
					>
						No tiene actividades agendadas
					</Typography>
				) : (
					activities.map(({activity, date}) => (
						<GridListTile className={classes.activity}>
							<img
								src={activitiesImages(`./${activity.img}`)}
								alt={activity.title}
							/>
							<GridListTileBar
								title={activity.title}
								subtitle={
									<span>
										{moment(date).format(
											"DD/MM/yyyy HH:mm"
										)}
									</span>
								}
							/>
						</GridListTile>
					))
				)}
			</Grid>
		</>
	);
};
