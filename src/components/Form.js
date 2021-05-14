import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  };
});

export function Form() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(
    new Date()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid alignItems="center" container direction="column" justify="center">
          <Grid item xs="auto">
            <Container maxWidth="sm">
              <TextField id="standard-basic" label="Ingrese su nombre" />
            </Container>

            <Container maxWidth="sm">
              <TextField id="standard-basic" label="Ingrese su CI" />
            </Container>

            <Container maxWidth="sm">
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
              />
            </Container>

            <Container maxWidth="sm">
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Seleccione una hora"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Container>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
  );
}
