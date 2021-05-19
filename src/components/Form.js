import React, {useState} from "react";
import "date-fns";

import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import {Button, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => {
	return {
		root: {
			"& .MuiTextField-root": {
				margin: theme.spacing(2),
				width: "30ch",
			},
		},
		date: {
			margin: theme.spacing(2),
			width: "30ch",
		},
		title: {
			margin: theme.spacing(2),
			color: theme.palette.primary.dark,
		},
		submit: {
			marginTop: theme.spacing(2),
			marginButtom: theme.spacing(2),
		},
	};
});

export function Form() {
	const classes = useStyles();

	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<form noValidate autoComplete="off">
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				className={classes.root}
			>
				<Typography
					align="center"
					variant="h3"
					component="h2"
					gutterBottom
					className={classes.title}
				>
					Ingrese sus datos
				</Typography>

				<TextField id="standard-basic" label="Ingrese su nombre" />

				<TextField id="standard-basic" label="Ingrese su CI" />
			</Grid>

			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="row"
				>
					<KeyboardDatePicker
						margin="normal"
						id="date-picker-dialog"
						label="Selecione una fecha"
						format="dd/MM/yyyy"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
						className={classes.date}
					/>

					<KeyboardTimePicker
						margin="normal"
						id="time-picker"
						label="Seleccione una hora"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							"aria-label": "change time",
						}}
						className={classes.date}
					/>
				</Grid>
			</MuiPickersUtilsProvider>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				className={classes.submit}
			>
				<Button variant="contained" color="primary">
					Agendar
				</Button>
			</Grid>
		</form>
	);
}