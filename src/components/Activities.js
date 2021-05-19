import {
	ButtonBase,
	Grid,
	GridListTile,
	GridListTileBar,
	makeStyles,
} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import React from "react";

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

const activities = [
	{
		img: "https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg",
		title: "Hola",
	},
	{
		img: "https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg",
		title: "Hola",
	},
	{
		img: "https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg",
		title: "Hola",
	},
	{
		img: "https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg",
		title: "Hola",
	},
	{
		img: "https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg",
		title: "Hola",
	},
];

export const Activities = () => {
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
				Seleccione una actividad
			</Typography>
			<Grid
				container
				direction="row"
				justify="space-evenly"
				alignItems="center"
			>
				{
					//TODO si no hay actividades
					activities.map((activity) => (
						<ButtonBase className={classes.buttomActivity}>
							<GridListTile
								key={activity.img}
								className={classes.activity}
							>
								<img src={activity.img} alt={activity.title} />
								<GridListTileBar title={activity.title} />
							</GridListTile>
						</ButtonBase>
					))
				}
			</Grid>
		</>
	);
};
